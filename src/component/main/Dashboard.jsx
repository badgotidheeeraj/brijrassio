import React from "react";

const Dashboard = () => {
  return (
    <>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Overview</li>
          </ol>

          {/* Summary Cards */}
          <div className="row g-4">
            {[
              { color: "primary", title: "Primary", icon: "fa-database" },
              {
                color: "warning",
                title: "Warning",
                icon: "fa-exclamation-triangle",
              },
              { color: "success", title: "Success", icon: "fa-check-circle" },
              { color: "danger", title: "Danger", icon: "fa-times-circle" },
            ].map((card, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div
                  className={`card bg-${card.color} text-white shadow h-100`}
                >
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <i className={`fas ${card.icon} me-2`}></i>
                      {card.title} Card
                    </div>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <a
                      className="small text-white text-decoration-none stretched-link"
                      href="#"
                    >
                      View Details
                    </a>
                    <div className="small text-white">
                      <i className="fas fa-angle-right" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="row mt-4">
            <div className="col-xl-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-header d-flex align-items-center">
                  <i className="fas fa-chart-area me-2 text-primary" />
                  <strong>Area Chart</strong>
                </div>
                <div className="card-body">
                  <canvas id="myAreaChart" width="100%" height={40} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-header d-flex align-items-center">
                  <i className="fas fa-chart-bar me-2 text-success" />
                  <strong>Bar Chart</strong>
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height={40} />
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white d-flex align-items-center">
              <i className="fas fa-users me-2" />
              <h5 className="mb-0">Employee Details</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped table-bordered mb-0 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start Date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    {/* Add more rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
