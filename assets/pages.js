function base(){
    document.getElementById('bodyPage').innerHTML = `
<div class="container">
    <div class="row">
      <div class="col-md-12">
          <center><h1 style="color: white;">Bienvenue sur NorthPark</h1><br>
        <div class="card text-white" style="background: #202225">
          <div class="card-body">
            <h5 class="card-title">Qui etes vous ?</h5>
            <p class="card-text">
            <div class="col-md-4">
                <input type="text" class="form-control" id="inputPseudo"><br>
                <button class="btn btn-light btn-block" onclick="receptionPseudo()">Jouer</button>
            </div>
            </p>
          </div>
        </div></center>
      </div>
    
    
   
  </div>
  </div>`;
}

function play(){
document.getElementById('bodyPage').innerHTML = `
<div class="col-lg-12">
<div class="row">
  <div class="col-sm-4">
    <div class="card text-white" style="background: #202225">
      <div class="card-body">
        <h5 class="card-title">Score des dernières parties</h5>
        <p id="scoreboard" class="card-text"></p>
      </div>
    </div>
  </div>

<div class="col-sm-6">
  <div class="row" style="text-align: center">
  <div class="col-sm-6">
    <div class="card" style="background: #202225">
      <div class="card-body">
        <h3 class="card-title text-white">Score : <span id="score"></span></h3>
      </div>
    </div><br>
  </div>
  <div class="col-sm-6">
    <div class="card" style="background: #202225">
      <div class="card-body">
        <h3 class="card-title text-white">Argent : <span id="life"> /5</span></h3>
      </div>
    </div><br>
  </div>
    
</div>
<div class="card" style="background: #202225">
  <div class="card-body">
    <div id='content'></div>
  </div>
</div>

</div>
<div class="col-sm-4">

</div>
</div>
</div>
`;
go();
}