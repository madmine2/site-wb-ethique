    //--------------------------------------------- sexe chart
const dataSexe = {
    labels: [
       'Femme',
       'Homme'
    ],
    datasets: [{
        data: [50,51],
        backgroundColor: [
            '#D9DBBC',
            '#FCDDBC'
       
        ],
        hoverOffset: 6
    }]
    };  

    const configSexe = {
        type: 'pie',
        data: dataSexe,
    };


    var chartSexe = new Chart(
        document.getElementById('sexe'),
        configSexe
    );
    //--------------------------------------------- chart age

    const dataAge = {
        labels: [ 
           'Moins de 18 ans',
           '18-25 ans',
           '26-35 ans',
           '36-65 ans',
           '66+ ans'
           
        ],
        datasets: [{
            data: [1,9,6,30,4],
            backgroundColor: [
            '#B8D8BA',
            '#D9DBBC',
            '#FCDDBC',
            '#EF959D',
            '#69585F'
           
            ],
            hoverOffset: 6
        }]
        };  
    
        const configAge = {
            type: 'pie',
            data: dataAge,
        };
     
        var chartAge = new Chart(
            document.getElementById('age'),
            configAge
        );
               //---------------------------------------------
               const dataAnimaux = {
                labels: [
                   'Oui',
                   'Non'
                   
                ],
                datasets: [{
                    data: [93,8],
                    backgroundColor: [
                      
                        '#B8D8BA',
                        '#EF959D'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const configAnimaux = {
                    type: 'doughnut',
                    data: dataAnimaux,
                };
            
            
                var chartAnimaux = new Chart(
                    document.getElementById('animaux'),
                    configAnimaux
                    );
                      //---------------------------------------------
   const dataDroitAnimaux = {
                labels: [
                   'Oui',
                   'Non'
                   
                ],
                datasets: [{
                    data: [94,7],
                    backgroundColor: [
                      
                        '#B8D8BA',
                        '#EF959D'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const configDroitAnimaux = {
                    type: 'doughnut',
                    data: dataDroitAnimaux,
                };
            
            
                var chartDroitAnimaux = new Chart(
                    document.getElementById('droitanimaux'),
                    configDroitAnimaux
                    );
                      //---------------------------------------------

 const labelsanimauxpoints = [1,2,3,4,5];
const dataanimauxpoints = {
  labels: labelsanimauxpoints,
  datasets: [{
    label: '',
    data: [2, 5, 22, 36,29],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)'
  
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)'
   
    ],
    borderWidth: 1
  }]
};
            
                const configanimauxpoints = {
                    type: 'bar',
                    data: dataanimauxpoints,
                    options: {
                      scales: {
                        y: {
                          beginAtZero: true
                        }
                      }
                    },
                  };
            
            
                var chartanimauxpoints = new Chart(
                    document.getElementById('animauxpoints'),
                    configanimauxpoints
                    );
                      //---------------------------------------------

 const dataanimauxraison = {
                labels: [
                   'Ils n ont pas de morales',
                   'Pas la même intelligence que les Hommes',
                   'Ils ne savent pas parler ',
                   'Autres'
                   
                ],
                datasets: [{
                    data: [11,25,20,45],
                    backgroundColor: [
                       '#B8D8BA',
            '#D9DBBC',
            '#FCDDBC',
            '#EF959D',
            '#69585F'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const configanimauxraison = {
                    type: 'pie',
                    data: dataanimauxraison,
                };
            
            
                var chartanimauxraison = new Chart(
                    document.getElementById('animauxraison'),
                    configanimauxraison
                    );
                      //---------------------------------------------

 const datasavoiria = {
                labels: [
                   'Oui',
                   'Non'
                   
                ],
                datasets: [{
                    data: [48,53],
                    backgroundColor: [
                       '#B8D8BA',
            '#D9DBBC',
            '#FCDDBC',
            '#EF959D',
            '#69585F'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const configsavoiria = {
                    type: 'pie',
                    data: datasavoiria,
                };
            
            
                var chartsavoiria = new Chart(
                    document.getElementById('savoiria'),
                    configsavoiria
                    );
                      //---------------------------------------------
        const dataestimerdroit = {
                      labels: [
                   'Oui',
                   'Non'
                   
                ],
                datasets: [{
                    data: [13,88],
                    backgroundColor: [
                  
            '#FCDDBC',
            '#EF959D',
            '#69585F'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const configestimerdroit = {
                    type: 'pie',
                    data: dataestimerdroit,
                };
            
            
                var chartestimerdroit = new Chart(
                    document.getElementById('estimerdroit'),
                    configestimerdroit
                    );
                      //---------------------------------------------
    /*
            const data = {
                labels: [
                   'Femme',
                   
                ],
                datasets: [{
                    data: [50,51],
                    backgroundColor: [
                       '#B8D8BA',
            '#D9DBBC',
            '#FCDDBC',
            '#EF959D',
            '#69585F'
                   
                    ],
                    hoverOffset: 6
                }]
                };  
            
                const config = {
                    type: 'pie',
                    data: data,
                };
            
            
                var chart = new Chart(
                    document.getElementById(''),
                    config
                    );
                      //---------------------------------------------
                */