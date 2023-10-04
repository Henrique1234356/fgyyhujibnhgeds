function classificar(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0ESCdR_Xj/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomR = Math.floor(Math.random()*255) + 1;
        randomG = Math.floor(Math.random()*255) + 1;  
        randomB = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").innerHTML = "posso ouvir: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Precisão " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_confidence").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        document.getElementById("result_label").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (results[0].label == "batuque"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
            

        }
      else  if (results[0].label == "boca"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
            

        }
      else  if (results[0].label == "boneco amarelo"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
            

        }
        else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
            

        }
        
    }
    
}