// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsSection = document.querySelector('.topics');
const tab = document.createElement('div');
const tab2 = document.createElement('div');

function topicCreator(topics) {
    topics.forEach(item => {
        let itemTopic = document.createElement('div');
        itemT
    })
}

tab.classList.add('tab');
tab2.classList.add('tab');
tab.textContent = 'Growth';
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(replyMe => {
        // debugger
        let topics;
        return topics = replyMe.data.topics;
    })
    .catch(rejectMe => {
        debugger
});
console.log(tab);
console.log(topics);
topicsSection.appendChild(tab);
topicsSection.appendChild(tab2);