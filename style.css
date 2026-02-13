* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Georgia, serif;
}

body {
  height: 100vh;
  background: linear-gradient(
    180deg,
    #5b8bd9,
    #b497d6,
    #f4a6b8
  );
  color: white;
  overflow: hidden;
}

/* Pages */
.page {
  display: none;
  height: 100vh;
  width: 100%;
  position: absolute;
}

.page.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Centered text */
.content {
  text-align: center;
  max-width: 600px;
}

/* Flower */
.flower {
  position: absolute;
  bottom: 80px;
  right: 40px;
  font-size: 28px;
  cursor: pointer;
}

.flower::after {
  content: attr(data-message);
  position: absolute;
  bottom: 35px;
  right: 0;
  background: rgba(0,0,0,0.7);
  padding: 8px 12px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
}

.flower:hover::after {
  opacity: 1;
}

/* Navigation */
#nav-buttons {
  position: fixed;
  bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}

button {
  background: rgba(255,255,255,0.2);
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

/* Progress bar */
#progress-wrapper {
  position: fixed;
  bottom: 15px;
  width: 100%;
  text-align: center;
}

#progress-bar {
  width: 80%;
  height: 8px;
  background: rgba(255,255,255,0.3);
  margin: 5px auto 0;
  border-radius: 10px;
}

#progress-fill {
  height: 100%;
  width: 0%;
  background: white;
  border-radius: 10px;
  transition: width 0.4s ease;
}
