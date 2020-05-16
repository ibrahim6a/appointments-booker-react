(this["webpackJsonpappointment-app-react"]=this["webpackJsonpappointment-app-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),o=a.n(i),c=a(1),r=a(2),s=a(4),m=a(3),u=a(7),d=window.M,p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={date:"",user:{fullName:"John Doe",email:"jd@gmail.com"}},e.updateUser=function(t){var a=Object(u.a)({},e.state).user,n=t.target,l=n.name,i=n.value;a[l]=i,e.setState({user:a})},e.formSubmit=function(t){t.preventDefault(),e.fetchAvailableTimes(),e.setState({date:e.selectedDate}),e.props.handleSubmit(e.state.user,e.state.date)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".datepicker"),a=d.Datepicker.init(t,{disableWeekends:!0,format:"dd, mm, yyyy"})[0];a.options.onSelect=function(){e.setState({date:a.date})}}},{key:"fetchAvailableTimes",value:function(){fetch("http://localhost:3000/date/".concat(this.selectedDate)).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.formSubmit},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"Full Name:"),l.a.createElement("input",{className:"",type:"text",name:"fullName",value:this.state.user.fullName,onChange:this.updateUser})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"Email: "),l.a.createElement("input",{className:"",type:"text",name:"email",value:this.state.user.email,onChange:this.updateUser})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"Select Date:"),l.a.createElement("input",{type:"text",className:"datepicker"})),l.a.createElement("input",{type:"submit",value:"Check Availability",className:"btn"})))}}]),a}(n.Component);var b=function(e){var t;return t=e.timeSlot.available?l.a.createElement("button",{className:"btn-flat amber-text text-accent-4",onClick:function(){e.bookAppointment(e.timeSlot)}},"Book Now"):l.a.createElement("button",{className:"btn-flat amber-text text-accent-4 disabled"},l.a.createElement("s",null,"Unavaliable")),l.a.createElement("div",{className:"col s3"},l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},e.timeSlot.timeSlot)),l.a.createElement("div",{className:"card-action"},t)))},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={availableTimes:[{id:0,timeSlot:9,available:!0},{id:1,timeSlot:10,available:!0},{id:2,timeSlot:11,available:!0},{id:3,timeSlot:12,available:!0},{id:4,timeSlot:13,available:!0},{id:5,timeSlot:14,available:!0},{id:6,timeSlot:15,available:!0},{id:7,timeSlot:16,available:!0}]},e.bookAppointment=function(t){e.props.bookSlot(t)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,"Available Slots"),l.a.createElement("div",{className:"row"},this.state.availableTimes.map((function(t){return l.a.createElement(b,{key:t.timeSlot,timeSlot:t,bookAppointment:e.bookAppointment})}))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={user:null,selectedDate:null,selectedTime:null},e.showTimeSlots=function(t,a){e.setState({user:t,selectedDate:a})},e.bookSlot=function(t){e.setState({selectedTime:t.timeSlot}),setTimeout((function(){e.sendRequestToServer()}),2e3)},e.sendRequestToServer=function(){fetch("https://appointment-app-server.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,{handleSubmit:this.showTimeSlots}),this.state.selectedDate&&l.a.createElement(v,{bookSlot:this.bookSlot}))}}]),a}(n.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.183bd407.chunk.js.map