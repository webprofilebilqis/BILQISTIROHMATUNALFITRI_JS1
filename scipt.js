function ifElse() {
    let layout = document.getElementById("program-if-else");
    layout.style.display = "block";
  
    let jenisKelamin = document.getElementById("if-else-jk").value;
    let hasil = document.getElementById("if-else-hasil");
  
    if (jenisKelamin == "l" || jenisKelamin == "l") {
      hasil.innerHTML = "Jenis kelamin anda perempuan";
    } else if (jenisKelamin == "P" || jenisKelamin == "p") {
      hasil.innerHTML = "Jenis kelamin anda perempuan";
    } else {
      hasil.innerHTML = "Masukin jenis kelaminmu yg bener yaaaa!";
    }
  }
  
  function nestedIfElse() {
    let layout = document.getElementById("program-nested-if-else");
    layout.style.display = "block";
  
    let tipe = document.getElementById("nested-if-else-jm").value;
    let hasil = document.getElementById("nested-if-else-hasil");
  
    if (jenisMakanan == "vegan") {
      hasil.innerHTML =
        "Anda tidak boleh memakan daging. Silakan memilih menu vegetarian";
    } else if (jenisMakanan == "daging") {
      console.log("daging");
      let layoutBuayaLabel = document.getElementById("layout-buaya-label");
      let layoutBuayaInput = document.getElementById("nested-if-else-daging");
      layoutBuayaLabel.style.display = "block";
      layoutBuayaInput.style.display = "block";
  
      let daging = document.getElementById("nested-if-else-daging").value;
  
      if (daging == "boleh") {
        hasil.innerHTML = "Silakan memesan menu masakan buaya spesial kami.";
      } else if (daging == "tidak") {
        hasil.innerHTML =
          "Anda tidak boleh memakan daging. Silakan memilih menu spesial lainnya";
      } else {
        hasil.innerHTML = "Masukkan jawaban yang sesuai";
      }
    } else {
      hasil.innerHTML = "Masukkan jawaban yang sesuai";
    }
  }
  
  function switchCase() {
    let layout = document.getElementById("switch-case");
    layout.style.display = "block";
    var pilihan = document.getElementById("pilihanPacar").value;
    var hasil = document.getElementById("hasil-switch-case");
  
    switch (pilihan) {
      case "Taehyung":
        hasil.innerHTML = "Anda memilih Taehyung.";
        hasil.innerHTML = "Anda memilih Taehyung.";
        break;
      case "Jungkook":
        hasil.innerHTML = "Anda memilih Jungkook.";
        break;
      case "Haruto":
        hasil.innerHTML = "Anda memilih Haruto.";
        break;
      case "Jaehyuk":
        hasil.innerHTML = "Anda memilih Jaehyuk.";
        break;
      default:
        hasil.innerHTML = "Silakan pilih Pacar Anda.";
        break;
    }
  }
  
  function forStatement() {
    let layout = document.getElementById("for-statement");
    layout.style.display = "block";
  
    let ul = document.getElementById("render");
  
    let jumlah = document.getElementById("for-input").value;
    let intJumlah = parseInt(jumlah);
  
    var kalimat = "I LOVE KIM TAEHYUNG🖤";
  
    if (intJumlah > 0) {
      for (let index = 0; index <= intJumlah; index++) {
        let listItem = document.createElement("li");
        listItem.textContent = kalimat;
        ul.appendChild(listItem);
      }
    }
  }
  
  function whileStatement() {
    let i = 0;
    let layout = document.getElementById("while-statement");
    layout.style.display = "block";
  
    let ul = document.getElementById("render-while");
  
    let jumlah = document.getElementById("while-input").value;
    let intJumlah = parseInt(jumlah);
  
    var kalimat = "Semoga Kuat Sampai Tamat😭";
  
    while (i < intJumlah) {
      let listItem = document.createElement("li");
      listItem.textContent = kalimat;
      ul.appendChild(listItem);
  
      i++;
    }
  }
  
  function doWhileStatement() {
    let i = 0;
    let layout = document.getElementById("do-while-statement");
    layout.style.display = "block";
  
    let ul = document.getElementById("render-do-while");
  
    let jumlah = document.getElementById("do-while-input").value;
    let intJumlah = parseInt(jumlah);
  
    var kalimat = "Pengen jadi sepuh pemrograman🙏🏻";
  
    do {
      let listItem = document.createElement("li");
      listItem.textContent = kalimat;
      ul.appendChild(listItem);
  
      i++;
    } while (i < intJumlah);
  }
  