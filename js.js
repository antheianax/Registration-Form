function populate(s1,s2,s3,s4,s5)
{
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  var s3 = document.getElementById(s3);
  var s4 = document.getElementById(s4);
  var s5 = document.getElementById(s5);

  s2.innerHTML = "";

  if(s1.value == "marikina")
  {
    var optionArray = ["Barangka", "Calumpang", "Concepcion Dos", "Concepcion Uno", "Fortune", "Industrial Valley", "Jesus De La Peña", "Malanday", "Marikina Heights", "Nangka", "Parang", "San Roque", "Santa Elena", "Santo Niño", "Tañong", "Tumana"];
  }
  else if(s1.value  == "muntinlupa")
  {
    var optionArray = ["Alabang", "Bayanan", "Buli", "Cupang", "New Alabang Village", "Poblacion", "Putatan", "Sucat", "Tunasan"];
  }
  else if(s1.value == "navotas"){
    var optionArray = ["Bagumbayan North", "Bagumbayan South", "Bangkulasi", "Daanghari", "Navotas East", "Navotas West", "NBBS Dagat-dagatan", "NBBS Kaunlaran", "NBBS Proper", "North Bay Boulevard North", "San Jose", "San Rafael Village", "San Roque", "Sipac Almacen", "Tangos North", "Tangos South", "Tanza 1", "Tanza 2"];
  }
  else if(s1.value == "pateros"){
    var optionArray = ["Aguho", "Magtanggol", "Martires del 96", "Poblacion", "San Pedro", "San Roque", "Santa Ana", "Santo Rosario-Kanluran", "Santo Rosario-Silangan", "Tabacalera"];
  }
  else if(s1.value == "sanjuan"){
    var optionArray = ["Addition Hills", "Balong-Bato", "Batis", "Corazon de Jesus", "Ermitaño", "Greenhills", "Halo-halo", "Isabelita", "Kabayanan", "Little Baguio", "Maytunas", "Onse", "Pasadeña", "Pedro Cruz", "Progreso", "Rivera", "Salapan", "San Perfecto", "Santa Lucia", "Tibagan", "West Crame"];
  }

  for (var i = 0; i < optionArray.length; i++) {
    var newoption = document.createElement("option");
    newoption.value = optionArray[i];
    newoption.innerHTML = optionArray[i].charAt(0).toUpperCase() + optionArray[i].slice(1); // Capitalize the first letter
    s2.options.add(newoption);
    } 
}