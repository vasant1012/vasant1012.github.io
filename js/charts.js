const dataMap = {
  performance: [0.78, 0.82, 0.84],
  stability: [0.02, 0.06, 0.09],
  interpretability: [0.9, 0.6, 0.4]
};

function render(metric) {
  Plotly.newPlot("chart-container", [{
    x: ["Logistic", "RF", "XGBoost"],
    y: dataMap[metric],
    type: "bar"
  }]);
}

render("performance");

document.querySelectorAll(".metric-toggle button").forEach(btn => {
  btn.onclick = () => render(btn.dataset.metric);
});
