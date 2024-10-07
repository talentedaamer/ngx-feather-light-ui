# NGX Feather Light UI
NGX Feather Light UI is a lightweight and simple yet powerful UI library for Angular applications. Designed with simplicity in mind, this library provides a minimal and efficient solution for projects that require basic UI controls without the overhead of larger frameworks like Angular Material or ngx-bootstrap.

### ![NGX Feather Light UI](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/main/src/assets/images/logo.svg "NGX Feather Light UI")
*A ***lightweight***, ***simple UI*** library for Angular, designed for ***fast prototyping*** and ***basic components*** without the bloat of larger frameworks.*

* Easy setup and integration with Angular projects.
* Lightweight components focused on simplicity and performance.
* No reliance on heavy dependencies like Angular Material or ngx-bootstrap.
* Ideal for small projects and quick prototyping.
* Responsive and accessible components for a seamless user experience.

### ***View Demo [Components & Documentation](https://talentedaamer.github.io/ngx-feather-light-ui/)***
https://www.npmjs.com/package/ngx-feather-light-ui

## Installation
Install NGX Feather Light UI using npm. ***view [package on npmjs](https://www.npmjs.com/package/ngx-feather-light-ui)***

```
npm i ngx-feather-light-ui
```

## Usage
Import the library into your Angular project:
```
import { FluiButtonModule } from 'ngx-feather-light-ui';

@NgModule({
  imports: [
    FluiButtonModule,
  ],
})
export class AppModule {}
```
### Using in Templates
```
<flui-button variant="primary" (isClicked)="isBtnClicked($event)" text="Button"></flui-button>
```

## Component List
The library contains the following components that can be used standalone or with template-driven and reactive forms.

### Buttons Component
![Button Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-1.PNG?token=GHSAT0AAAAAABX4OIRCBT5ETZ5ETKQ74NF2YY3DU7Q)
`<flui-button></flui-button>`

### Input Component
![Input Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-2.PNG?token=GHSAT0AAAAAABX4OIRDZS5TN4QQEDW7PBCUYY3DVXA)
`<flui-input></flui-input>`

### Textarea Component
![Textarea Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-3.PNG?token=GHSAT0AAAAAABX4OIRD4SPVPSGP3ITDQGVGYY3DWAA)
`<flui-textarea></flui-textarea>`

### Checkbox Component
![Checkbox Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-4.PNG?token=GHSAT0AAAAAABX4OIRDOTIBCVT5Y2OAINL4YY3DQSQ)
`<flui-checkbox></flui-checkbox>`

### Radio Button Component
![Radio Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-5.PNG?token=GHSAT0AAAAAABX4OIRCYJXMX7NXWO5GEXL2YY3DRNQ)
`<flui-radio></flui-radio>`

### Selectbox Component
![Select Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-6.PNG?token=GHSAT0AAAAAABX4OIRDFTKEVWIOOFAHJANKYY3DRWA)
`<flui-selectbox></flui-selectbox>`

### Alert Component
![Alert Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-7.PNG?token=GHSAT0AAAAAABX4OIRCKCBYDTWJMOFA6EK4YY3DSAQ)
`<flui-alert></flui-alert>`

### Card Component
![Card Component](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-8.PNG?token=GHSAT0AAAAAABX4OIRC2GNXQOGSZVPLLREMYY3DTIQ)
`<flui-card></flui-card>`

### Login form using Different Components
![Login Form](https://raw.githubusercontent.com/talentedaamer/ngx-feather-light-ui/master/screenshots/screenshot-9.PNG?token=GHSAT0AAAAAABX4OIRDTXX6SCKTKF2C65RWYY3DTOA)

