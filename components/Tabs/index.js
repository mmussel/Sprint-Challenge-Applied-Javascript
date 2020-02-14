// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


     
const tabs = document.querySelector('.topics')

function tabsCreator(item) {
   
    const tabTopics = document.createElement('div'); 
    console.log(item);
    tabTopics.classList.add('tab');
    tabTopics.textContent = item;

    return tabTopics;

}
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log('here',response.data.topics);
        
        response.data.topics.forEach(element => {
            tabs.append(tabsCreator(element));
        });
    })
    .catch(error => {
        console.log('there is an error', error);
    });