function openModal(project) {
  const title = document.getElementById("modal-title");
  const image = document.getElementById("modal-image");
  const body = document.getElementById("modal-body");

  if (project === "stock") {
    title.innerText = "Stock Price Prediction Web Application";
    image.src = "assets/stock.png";

    body.innerHTML = `
      <h3>Project Overview</h3>
      <hr />
      <p>
        Developed an end-to-end machine learning system to predict next-day
        stock prices using historical market data and time-series models.
      </p>

      <h3>Machine Learning Approach</h3>
      <hr />
      <ul>
        <li>LSTM and GRU models for time-series forecasting</li>
        <li>60-day sliding window for sequence generation</li>
        <li>MinMax scaling for data normalization</li>
        <li>80–20 train-test split</li>
      </ul>

      <h3>Model Evaluation</h3>
      <hr />
      <ul>
        <li>Evaluation using RMSE and MAPE</li>
        <li>Performance comparison between LSTM and GRU</li>
      </ul>

      <h3>Tech Stack</h3>
      <hr />
      <p>Python, TensorFlow (Keras), Flask, yfinance, Pandas, NumPy, scikit-learn</p>
    `;
  }

  else if (project === "inventory") {
  title.innerText = "Smart Stock Inventory Optimization for Retail Stores";
  image.src = "assets/inventory.png";

  body.innerHTML = `
    <h3>Project Overview</h3>
    <hr />
    <p>
      Developed a demand forecasting and inventory optimization system aimed at
      helping retail stores reduce overstocking and avoid stockouts. The system
      forecasts future demand using historical sales data and provides insights
      via an interactive dashboard.
    </p>

    <h3>Key Features</h3>
    <hr />
    <ul>
      <li>Demand forecasting using historical sales data</li>
      <li>Interactive dashboard for inventory insights</li>
      <li>Model evaluation and validation on real datasets</li>
      <li>Designed for practical use by retail managers</li>
    </ul>

    <h3>Technical Approach</h3>
    <hr />
    <ul>
      <li>Time-series analysis and forecasting techniques</li>
      <li>Data preprocessing and feature engineering</li>
      <li>Evaluation using standard metrics</li>
      <li>Dashboard built with Streamlit for usability</li>
    </ul>

    <h3>Tech Stack</h3>
    <hr />
    <p>Python, Pandas, NumPy, scikit-learn, Streamlit, Matplotlib</p>

    
  `;
}


  else if (project === "maze") {
    title.innerText = "Interactive Maze Solver & Visualizer";
    image.src = "assets/maze.png";

    body.innerHTML = `
      <h3>Project Overview</h3>
      <hr />
      <p>
        Developed an interactive maze visualizer that demonstrates how
        classical pathfinding algorithms explore and solve mazes step by step.
      </p>

      <h3>Algorithms Implemented</h3>
      <hr />
      <ul>
        <li>Breadth-First Search (BFS)</li>
        <li>Bidirectional BFS</li>
        <li>Dijkstra’s Algorithm</li>
        <li>A* Search</li>
        <li>Greedy Best-First Search</li>
      </ul>

      <h3>Technical Highlights</h3>
      <hr />
      <ul>
        <li>Modular JavaScript architecture</li>
        <li>Real-time grid rendering and animations</li>
        <li>Clear visualization of visited nodes and shortest path</li>
      </ul>

      <h3>Tech Stack</h3>
      <hr />
      <p>HTML, CSS, JavaScript, Graph Algorithms</p>
    `;
  }

  const modal = document.getElementById("projectModal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
