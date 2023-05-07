import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

const ScoreUpdateScreen = ({ matchData, game }) => {

  const { apiUrl, scoringModel } = app_config;
  const [matchScore, setMatchScore] = useState(scoringModel[game](21))
  // const [playerAScore, setPlayerAScore] = useState(matchScore.playerA);
  // const [playerBScore, setPlayerBScore] = useState(matchScore.playerB);
  const [loading, setLoading] = useState(false);
  // console.log(matchData);

  const initializeScores = () => {
    if (!matchData.matchData) return;
    if (!matchData.matchData.score) {
      updateMatch({ matchData: { score: matchScore } });
    }else{
      setMatchScore(matchData.matchData.score);
    }
  };

  useEffect(() => {
    initializeScores();
  }, []);

  const updateMatch = async (data) => {
    setLoading(true);
    const res = await fetch(`${apiUrl}/match/update/${matchData._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.status);
    const {result} = await res.json();
    console.log(result);
    setMatchScore(result.matchData.score);
    toast.success("Score Updated");
    setLoading(false);
  };

  const updateScore = (score, key) => {
    if(matchScore[key]+1>matchScore.totalScore) return;
    const newScore = { ...matchScore };
    newScore[key] = score;
    // console.log(newScore);
    setMatchScore(newScore);
    updateMatch({ matchData: { score: newScore } });
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h4 className="text-center">{matchData.playerA.name}</h4>
              <input
                type="number"
                className="form-control"
                placeholder={matchData.playerA.name+' Score'}
                value={matchScore.playerA}
                onChange={(e) => {
                  updateScore(parseInt(e.target.value), 'playerA');
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <h4 className="text-center">{matchData.playerB.name}</h4>
              <input
                type="number"
                className="form-control"
                placeholder={matchData.playerB.name+' Score'}
                value={matchScore.playerB}
                onChange={(e) => {
                  updateScore(parseInt(e.target.value), 'playerB');
                }}
              />
            </div>
          </div>
        </div>
        {
          (matchScore.playerA >= matchScore.totalScore || matchScore.playerB >= matchScore.totalScore) &&
          <>
          <button className="btn btn-danger" onClick={e => updateMatch({status : 'finished'})}>End Match</button>

          </>
        }
      </div>

    </div>
  );
};

const ManageScores = ({ tournamentData }) => {
  const [matchList, setMatchList] = useState([]);
  const { apiUrl } = app_config;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(false);
  const [selMatch, setSelMatch] = useState(null);

  const fetchMatchList = async () => {
    setLoading(true);
    const res = await fetch(
      `${apiUrl}/match/getbytournament/${tournamentData._id}`
    );
    const data = await res.json();
    // console.log(data);
    setMatchList(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchMatchList();
  }, []);

  const checkMatchStarted = (beginTime) => {
    return new Date(beginTime) < new Date();
  };

  const displayScoreWindow = (match) => {};

  const deleteMatch = async (id) => {
    const res = await fetch(`${apiUrl}/match/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.status);
    toast.success("Match Deleted Successfully");
    fetchMatchList();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "finished":
        return "warning";
      case "pending":
        return "secondary";
      case "live":
        return "success";
      default:
        return "secondary";
    }
  }

  const displayMatches = () => {
    if (loading) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      return matchList.map((match, index) => (
        <div className="card mb-3">
          <div className="card-header">
            <p className="m-0">({match.title})</p>
            <h3 className="float-end">
              {new Date(match.scheduled).toLocaleDateString()}{" "}
              {new Date(match.scheduled).toLocaleTimeString()}
            </h3>
            {checkMatchStarted(match.scheduled) ? (
              
              <span className={`badge badge-${getStatusColor(match.status)} bg-${getStatusColor(match.status)}`}>Match {match.status}</span>
            ) : (
              <span className={`badge badge-${getStatusColor(match.status)} bg-${getStatusColor(match.status)}`}>
                Not Started Yet
              </span>
            )}
            <button
              className="btn btn-primary"
              data-mdb-toggle="modal"
              data-mdb-target="#scoreModal"
              onClick={(e) => setSelMatch(index)}
            >
              Update Score
            </button>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteMatch(match._id)}
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="row justify-content-around align-items-center">
              <div className="col-md-4">
                <img
                  src={
                    match.playerA.image
                      ? apiUrl + "/" + match.playerA.image
                      : "/player.png"
                  }
                  alt=""
                  className="img-fluid"
                />
                <h4>{match.playerA.name}</h4>
              </div>
              <div className="col-md-2">
                <img className="img-fluid" src="/vs.jpg" alt="" />
              </div>
              <div className="col-md-4">
                <img
                  src={
                    match.playerB.image
                      ? apiUrl + "/" + match.playerB.image
                      : "/player.png"
                  }
                  alt=""
                  className="img-fluid"
                />
                <h4 className="text-center">{match.playerB.name}</h4>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      {selMatch !== null && (
        <div
          className="modal fade"
          id="scoreModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Match Scores
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ScoreUpdateScreen matchData={matchList[selMatch]} game={tournamentData.game} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">{displayMatches()}</div>
        </div>
      </div>
    </div>
  );
};

export default ManageScores;
