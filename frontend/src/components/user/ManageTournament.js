<<<<<<< HEAD
import React from 'react'

const ManageTournament = () => {
  return (
    <div>ManageTournament</div>
=======
import React from 'react';

const AddTournament = () => {

  

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
            dsfdf
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
>>>>>>> dec18311da330a355f56dcd405d8f3b651a1b995
  )
}

export default ManageTournament