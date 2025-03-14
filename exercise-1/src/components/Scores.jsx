export default function Score({ courseName, courseResults }) {
  function ScoreStyle(score) {
    return score < 50 ? "warning" : "";
  }

  function calculateStatistics() {
    let min = Math.min(...courseResults.map(result => result.score));
    let max = Math.max(...courseResults.map(result => result.score));
    let avg = courseResults.reduce((acc, result) => acc + result.score, 0) / courseResults.length;
    return { avg: avg.toFixed(2), min, max };
  }

  const { avg, min, max } = calculateStatistics();
  return (
    <div className="scores">
      <h1>{courseName}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResults.map((result, index) => (
              <tr key={index}>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
                <td className={ScoreStyle(result.score)}>{result.score}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th>Average</th>
              <th>Minimum</th>
              <th>Maximum</th>
            </tr>
            <tr>
              <td>{avg}</td>
              <td>{min}</td>
              <td>{max}</td>
            </tr>
          </thead>
        </table>    
      </div>
  );
}