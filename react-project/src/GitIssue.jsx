import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const GitIssue = () => {
  const [issues, setIssues] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "id", headerName: " S NO", width: 90},
    { field: "body", headerName: " ISSUES", width: 1000 },
  ];

  const rows =
    issues.length > 0 &&
    issues.map((data, index) => {
      // console.log("hello check",body)
      return {
        id: index + 1,
        body: data.body ? data.body : "issue",
      };
    });

  const username = "hakimel";
  const reponame = "reveal.js";
  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}/issues`)
      .then((response) => {
        if (response.ok) {
          console.log("response", response);
          return response.json();
        }
        throw new Error("Request failed.");
      })
      .then((data) => {
        // set our state with the response
        setIssues(data);
      })
      .catch((error) => {
        setIssues([]);
      });
  }, []);

  console.log("issues", issues);
  return (
      <>
      <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10,20,30]}
        disableSelectionOnClick
      />
    </div>
      </>
  )
};

export default GitIssue;
