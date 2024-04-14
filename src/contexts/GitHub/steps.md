# step1 : 
after the app is ready/working with usestate and props, create a nee folder named contexts in src

# step2 :
create a folder with name of your choice(ex: github in this case, hoorain, fireCool..) & create 3 files named 1. githubContext.js, 2. githubReducer.js, 3. GitHubState.js

# step3 :
initial boilerPlate code setup in all3 files. plus wrapping all the index.js app level router in  <GitHubState>browser router, app..</GitHubState>

# step4 :
now initialise initialState variable in GitHubState file with all the useState variables from App.js 
Note: we wont be needing useState() no more, we will use another hook called useReducer()

# step5 :
