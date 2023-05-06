import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ManageCategories from './ManageCategories';
import ManageMatches from './ManageMatches';
import ManagePlayer from './ManagePlayer';
import app_config from '../../config';
import ManageScores from './ManageScores';
import ManageTeams from './ManageTeams';
const AddTournament = () => {

  const url = app_config.apiUrl;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { games } = app_config;

  const [tournamentList, setTournamentList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isTeam, setIsTeam] = useState(false);

  const [selTournament, setSelTournament] = useState(null);

  const getUserTournament = async () => {
    setLoading(true);
    const res = await fetch(`${url}/tournament/getbyuser/${currentUser._id}`);
    console.log(res.status);
    setLoading(false);

    if (res.status === 200) {
      const data = (await res.json()).result;
      setTournamentList(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getUserTournament();
  }, []);

  const showTournamentGames = () => {
    if (selTournament) {
      return "";
    }
  };

  const displayTabs = () => {
    if (selTournament !== null)
      return (
        <>
          <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="ex-with-icons-tab-1"
                data-mdb-toggle="tab"
                href="#ex-with-icons-tabs-1"
                role="tab"
                aria-controls="ex-with-icons-tabs-1"
                aria-selected="true"
              >
                <i className="fas fa-chart-pie fa-fw me-2" />
                Players
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex-with-icons-tab-2"
                data-mdb-toggle="tab"
                href="#ex-with-icons-tabs-2"
                role="tab"
                aria-controls="ex-with-icons-tabs-2"
                aria-selected="false"
              >
                <i className="fas fa-chart-line fa-fw me-2" />
                Matches
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex-with-icons-tab-3"
                data-mdb-toggle="tab"
                href="#ex-with-icons-tabs-3"
                role="tab"
                aria-controls="ex-with-icons-tabs-3"
                aria-selected="false"
              >
                <i className="fas fa-cogs fa-fw me-2" />
                Categories
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex-with-icons-tab-4"
                data-mdb-toggle="tab"
                href="#ex-with-icons-tabs-4"
                role="tab"
                aria-controls="ex-with-icons-tabs-4"
                aria-selected="false"
              >
                <i className="fas fa-cogs fa-fw me-2" />
                Scores
              </a>
            </li>
            {isTeam && (
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex-with-icons-tab-5"
                  data-mdb-toggle="tab"
                  href="#ex-with-icons-tabs-5"
                  role="tab"
                  aria-controls="ex-with-icons-tabs-5"
                  aria-selected="false"
                >
                  <i className="fas fa-cogs fa-fw me-2" />
                  Teams
                </a>
              </li>
            )}
          </ul>
          <div className="tab-content" id="ex-with-icons-content">
            <div
              className="tab-pane fade show active"
              id="ex-with-icons-tabs-1"
              role="tabpanel"
              aria-labelledby="ex-with-icons-tab-1"
            >
              <ManagePlayer tournamentData={tournamentList[selTournament]} />
            </div>
            <div
              className="tab-pane fade"
              id="ex-with-icons-tabs-2"
              role="tabpanel"
              aria-labelledby="ex-with-icons-tab-2"
            >
              <ManageMatches tournamentData={tournamentList[selTournament]} />
            </div>
            <div
              className="tab-pane fade"
              id="ex-with-icons-tabs-3"
              role="tabpanel"
              aria-labelledby="ex-with-icons-tab-3"
            >
              <ManageCategories
                tournamentData={tournamentList[selTournament]}
                refreshData={getUserTournament}
              />
            </div>
            <div
              className="tab-pane fade"
              id="ex-with-icons-tabs-4"
              role="tabpanel"
              aria-labelledby="ex-with-icons-tab-4"
            >
              <ManageScores tournamentData={tournamentList[selTournament]} />
            </div>

            <div
              className="tab-pane fade"
              id="ex-with-icons-tabs-5"
              role="tabpanel"
              aria-labelledby="ex-with-icons-tab-5"
            >
              <ManageTeams tournamentData={tournamentList[selTournament]} />
            </div>
          </div>
        </>
      );
  };

  const selectTournament = (tournament, index) => {
    setSelTournament(index);
    console.log(games);
    for (let game of games) {
      if (game.name === tournament.game) {
        setIsTeam(game.type === "team");
        break;
      }
    }
  };

  const tournamentForm = useFormik({
    initialValues: {

    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return <>
    <div
      className="modal fade"
      id="tournament-create"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
          <div className="card rounded-3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                        className="w-100"
                        style={{
                          borderTopLeftRadius: ".3rem",
                          borderTopRightRadius: ".3rem"
                        }}
                        alt="Sample photo"
                      />
                      <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                          Registration Info
                        </h3>
                        <form className="px-md-2" onSubmit={tournamentForm.handleSubmit} >
                          <div className=" mb-4">
                            <input
                              type="text"
                              id="title"
                              value={tournamentForm.values.title}
                              onChange={tournamentForm.handleChange}
                              className={"form-control" + (tournamentForm.errors.title ? "border-danger": '')}
                              placeholder='Title'
                            />
                           
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className=" datepicker">
                                <input
                                  type="text"
                                  id="game"
                                  value={tournamentForm.values.game}
                                  onChange={tournamentForm.handleChange}
                                  className={"form-control " + (tournamentForm.errors.game ? "border-danger": '')}
                                  
                                />
                                <label htmlFor="exampleDatepicker1" className="form-label">
                                  Select a date
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <select className="select">
                                <option value={1} disabled="">
                                  Gender
                                </option>
                                <option value={2}>Female</option>
                                <option value={3}>Male</option>
                                <option value={4}>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-4">
                            <select className="select">
                              <option value={1} disabled="">
                                Class
                              </option>
                              <option value={2}>Class 1</option>
                              <option value={3}>Class 2</option>
                              <option value={4}>Class 3</option>
                            </select>
                          </div>
                          <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                            <div className="col-md-6">
                              <div className="">
                                <input
                                  type="text"
                                  id="form3Example1w"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="form3Example1w">
                                  Registration code
                                </label>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-success btn-lg mb-1">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>

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
  </>
}

const ManageTournament = () => {
  return (
    <div className='' style={{ backgroundColor: '#eee', minHeight: '100vh' }}>
      {<AddTournament />}
      <div className='container-fluid py-4'>
        <div className='row'>
          <div className='col-md-2'>
            <div className='card'>
              <div className="card-body">
                <button className='btn btn-primary' type="button"
                  data-mdb-toggle="modal"
                  data-mdb-target="#tournament-create">Create Tournament</button>
              </div>
            </div>
          </div>
          <div className='col-md-10'></div>
        </div>
      </div>
    </div>
  )
}

export default ManageTournament