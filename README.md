# Part Time Work Scheduler
> This is a requirement for NCSU's CSC510 Software Engineering Course project 1 for Group 10.
<p align="center">
<img src="https://github.com/boscosylvester-john/parttimeScheduler/blob/main/images/SHIFTMATE.gif" width="400" height="300" />
</p>

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



https://user-images.githubusercontent.com/51780939/194799168-886cd2e7-66c9-419f-a933-03e66bb77d5b.mp4


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
    - They need to verify the attendance records for all the students attending their shifts.
    - They need to approve each request of a student dropping their shifts
    - They are resposible to keep track of the infraction points for students when they miss their shift.  <br>

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
    - To have a quick look at the status of requests made for shift change or drop
    - Links to all pages from the navigation bar.
- To show the students schedule in detail with a single view showing shifts at multiple workplaces.
- It also shows a view which shows the schedule for the current week for all the students working at the given selected workplace. Eg. Schedule of all the students working at Starbucks in the given week.
- Then come the tradeplace where one can select froma list of his/her own shifts and <em> offer</em> them to other people.
- There is also an option for you to <em>takeup</em> someone else's shift that has been <em> offered</em>.
- If your <em> offered</em> shift is <em>takenup</em> by someone else then it will be removed from your schedule and added to their schedule.

>For Supervisors -<br>
- They have the ability to onboard the students working at their store. They have the ability to generate a default password for the Student account.
- They will have to fix a weekly schedule for all student employees based on the staff requirements and taking into consideration the students study schedule.
- They will have the authority to fire and remove any student from the system for not reporting on shifts and any other reasons as deemed necessary.
- They will have to approve each <em>offer </em> request raised by the students where they don't want to attend the shift.
- They wil have access to more advanced statistics for each of the students working at theie store.
- They will have to manually or electronically verify the in and out time punched in by the student.
 -Basically they have superior admin right to this system. 


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
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="middleware">middleware</td>
	<td data-value="29.54" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 29%"></div><div class="cover-empty" style="width: 71%"></div></div>
	</td>
	<td data-value="29.54" class="pct low">29.54%</td>
	<td data-value="44" class="abs low">13/44</td>
	<td data-value="29.54" class="pct low">29.54%</td>
	<td data-value="44" class="abs low">13/44</td>
	</tr>

<tr>
	<td class="file medium" data-value="models">models</td>
	<td data-value="71.42" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 71%"></div><div class="cover-empty" style="width: 29%"></div></div>
	</td>
	<td data-value="71.42" class="pct medium">71.42%</td>
	<td data-value="7" class="abs medium">5/7</td>
	<td data-value="71.42" class="pct medium">71.42%</td>
	<td data-value="7" class="abs medium">5/7</td>
	</tr>

<tr>
	<td class="file low" data-value="routes">routes</td>
	<td data-value="30.95" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 30%"></div><div class="cover-empty" style="width: 70%"></div></div>
	</td>
	<td data-value="30.95" class="pct low">30.95%</td>
	<td data-value="42" class="abs low">13/42</td>
	<td data-value="30.95" class="pct low">30.95%</td>
	<td data-value="42" class="abs low">13/42</td>
	</tr>

</tbody>
</table>

---

## License

[![GitHub](https://img.shields.io/github/license/boscosylvester-john/parttimeScheduler?color=blueviolet)](https://www.gnu.org/licenses/gpl-3.0.en.html)

[License Guidelines](https://github.com/boscosylvester-john/parttimeScheduler/blob/main/LICENSE.md)

---


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
