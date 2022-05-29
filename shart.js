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