# Part Time Work Scheduler
> This is a requirement for NCSU's CSC510 Software Engineering Course project 1 for Group 10.

[![DOI](https://zenodo.org/badge/541409211.svg)](https://zenodo.org/badge/latestdoi/541409211)
![GitHub](https://img.shields.io/github/license/boscosylvester-john/parttimeScheduler?color=blueviolet)
![GitHub pull requests](https://img.shields.io/github/issues-pr/boscosylvester-john/parttimeScheduler)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/boscosylvester-john/parttimeScheduler?color=orange)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/boscosylvester-john/parttimeScheduler?color=purple)
![GitHub contributors](https://img.shields.io/github/contributors/boscosylvester-john/parttimeScheduler?color=yellow)
![GitHub issues](https://img.shields.io/github/issues/boscosylvester-john/parttimeScheduler?color=teal)
![GitHub closed issues](https://img.shields.io/github/issues-closed/boscosylvester-john/parttimeScheduler?color=aqua)
[![GitHub top language](https://img.shields.io/github/languages/top/boscosylvester-john/parttimeScheduler)](https://www.typescriptlang.org/)
[![GitHub forks](https://img.shields.io/github/forks/boscosylvester-john/parttimeScheduler?style=social)](https://github.com/boscosylvester-john/parttimeScheduler/network/members)
[![Node.js CI](https://github.com/boscosylvester-john/parttimeScheduler/actions/workflows/node.js.yml/badge.svg)](https://github.com/boscosylvester-john/parttimeScheduler/actions/workflows/node.js.yml)
[![GitHub Workflow Status (event)](https://img.shields.io/github/workflow/status/boscosylvester-john/parttimeScheduler/Node.js%20CI?event=push)](https://github.com/boscosylvester-john/parttimeScheduler/actions)
---

## Goal

> Implementing a part time work scheduler for university students to efficiently manage their work at the campus employer. 
---
## Motivation
> There are a lot of students that manage multiple on campus jobs at the same time. Creating a unified interface that helps manage all of them would prove to be a life saver for them. Currently the employer chooses their own platform and the student has to manage all those different applications at once.
---
## Features
### Users

- Students
    >These are university students who work in shifts at employers on the campus in their free time to supplementt the payment towards their tuition.

    Their responsibilities include-
    - They have a relatively fixed schedule alloted to them by their supervisorsaccording to their own personal schedule.
    - They are supposed to be present at their shift timings. Some infractions are allowed before they are fired for causing understaffing at the store.
    - They need to let their supervisor and other peers know if they will be unable to take up their alloted shift.
    - Some others can volunterily take up such shifts to earn more in their free time.
    - 
    <br>
- Supervisors
    >These are the permanent employees at the campus employer who manage the students working there.

    Their resposibilities include - 
    - Hiring and onborading new student employees and giving them access to their shift management system. 
    - They also have to fix a schedule for each student keeping in mind the staff strength required at the store.
    - They need to verifythe attendance records for all the students attending their shifts.
    -  <br>

### Components
The components for the system are-
- Frontend- It is made using Node.js , Typescript and React-Bootstrap.

- Backend- This uses Express.js and MongoDb to maintain the data for implementing this project.

### Functionality
The things the project intends to deliver-<br>
>For Students -<br>
- Give an interactive Homepage to view numerous things like-
    - Their upcoming shifts
    - Statistics related to shifts in the current week like hours completed, scheduled etc.
    - To have a quick look at the status of requests made for shift change or drop<br>
    - Links to all pages from the navigation bar.
- To schow the students schedule in detail
- 


---

## Getting Started

### Installation

- Install Node.js from [here](https://nodejs.org/en/download/) and finish the required setup in the executable file.
- Install a global React-app for the project using-
    ```bash
    $ npm install -g create-react-app
    ```
- Install Express.js for backend using-
    ```bash
    $ npm install express --save
    ```
- Install MongoDb(mongoose)using-
    ```bash
    $ npm install mongoose --save
    ```
- Install dotenv  using-
    ```bash
    $ npm install dotenv --save
    ```
- Install cors express middleware for backend using-
    ```bash
    $ npm install cors --save
    ```
- Create working directory named <em>PartTimeScheduler</em> and go inside it
    ```bash
    $ mkdir PartTimeScheduler
    $ cd PartTimeScheduler
    ```
- Clone this repository from [here](https://github.com/boscosylvester-john/parttimeScheduler) or use the following in GitBash
    ```bash
    $ git clone https://github.com/boscosylvester-john/parttimeScheduler
    ```
- Install all the requirements lsted in <em> package.json</em> using
    ```bash
    $ npm install
    ```
- Run the app using 
    ```bash
    $ npm start
    ```

### Running Tests

- Test all the test files in the project directory using
    ```bash
    $ node server.js
    $ npm test
    ```
    
- Generate the coverage reports


## Coverage Reports


---

## License

[![GitHub](https://img.shields.io/github/license/boscosylvester-john/parttimeScheduler?color=blueviolet)](https://www.gnu.org/licenses/gpl-3.0.en.html)

[License Guidelines](https://github.com/boscosylvester-john/parttimeScheduler/blob/main/LICENSE.md)

---
## Future Scope
----

## Contribute

Please have a look at the [guidelines](https://github.com/boscosylvester-john/se_hw_LuaToPython/blob/main/CONTRIBUTING.md) before contributing.

---

## Authors

- Ankur Banerji [Github](https://github.com/ankurbanerji3)
- Boscosylvester Chittilapilly [Github](https://github.com/boscosylvester-john)
- Prasad Kamath [Github](https://github.com/kamathprasad9)
- Shlok Naik [Github](https://github.com/shlokio)
- Tushar Kini [Github](https://github.com/tusharkini)

---

## Technical Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

-----