// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        
        response.data.topics.forEach(e => {
            
            const newTab = response.data.topics;
            tabs.appendChild(newTab);
        })
    })
    .catch(error => {
        console.log('there is an error', error);
    })
   
const tabs = document.querySelector('.tabs')

function tabsCreator(item) {
    const tabElement = document.createElement('div');
    const tabTopics = document.createElement('div');
    const tabTitle = document.createElement('span');

    tabTitle.textContent = data.topics;

    console.log(item.topic);
    tabElement.classList.add('tab');
    tabTopics.classList.add('topics');
    tabTitle.classList.add('title');

    tabs.appendChild(tabElement);
    tabElement.appendChild(tabTopics);
    tabTopics.appendChild(tabTitle);

   
    

    return tabElement;

}