(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={container:"exercise_container__VpwfQ",header:"exercise_header__3AHhL",tagContainer:"exercise_tagContainer__llBeG",heading:"exercise_heading__f6SNk",body:"exercise_body__2ChaF",tag:"exercise_tag__1emrj",createTagBtn:"exercise_createTagBtn__3aV8w",add:"exercise_add__2Fgcx",footer:"exercise_footer__19TO_",bodyHeadings:"exercise_bodyHeadings__2x5Od",bodyContent:"exercise_bodyContent__3WTbA"}},18:function(e,t,a){e.exports={form:"workoutForm_form__2U03N",container:"workoutForm_container__3mMO5",exerciseForm:"workoutForm_exerciseForm__FaUTR",notClickable:"workoutForm_notClickable__1Ss8S",icon:"workoutForm_icon__2CTWX",link:"workoutForm_link__1gaaQ"}},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),i=a.n(c),o=a(3),s=a(4),l=a(6),u=a(5),d=a(7),m=(a(77),a(184)),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement("div",{className:"dividerOverlay"},r.a.createElement("div",{className:"divider"},"|"),r.a.createElement("div",{className:"divider"})),r.a.createElement(m.a,{to:{pathname:"/"}},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-dumbbell"}))),r.a.createElement(m.a,{to:{pathname:"/history"}},r.a.createElement("div",{onClick:function(){return console.log("history")}},r.a.createElement("i",{className:"fas fa-calendar"})))))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"GymLog"))}}]),t}(n.Component),v=a(2),p=a(22),f=a.n(p),_=a(20),g=a.n(_),y=function(e){var t=e.date,a=t.today,n=(t.month,t.year,t.nDays),c=e.isCurrentMonth,i=e.workouts,o=e.dispatch,s=[];s=function(){for(var e=1;e<n+1;e++)s.push(e);return s}();var l=i.map(function(e){return e.date.getDate()}),u=function(e){var t=e.children,a=e.to;return e.condition?r.a.createElement(m.a,{to:a},t):t},d=function(e){return i.filter(function(t){return e==new Date(t.date).getDate()})[0]};return console.log(i),d(1),r.a.createElement("div",{className:g.a.container},r.a.createElement("div",{className:g.a.header},r.a.createElement("div",null,"M"),r.a.createElement("div",null,"T"),r.a.createElement("div",null,"W"),r.a.createElement("div",null,"Th"),r.a.createElement("div",null,"F"),r.a.createElement("div",null,"Sa"),r.a.createElement("div",null,"Su")),r.a.createElement("div",{className:g.a.body},s.map(function(e){return r.a.createElement("div",{className:"".concat(g.a.dateCell," \n              ").concat(e==a&&c?g.a.today:null,"\n              ").concat(l.includes(e)&&e!=a?g.a.workoutDay:null,"\n              "),key:e,onClick:l.includes(e)?function(){return o({type:"VIEW_WORKOUT",payload:{id:d(e).id}})}:null},r.a.createElement(u,{condition:l.includes(e),to:{pathname:"/history/".concat(l.includes(e)?d(e).id:null)}},r.a.createElement("div",{className:g.a.inner},e)))})))},b=a(13),O=a(12),k=a(14),w=a.n(k),j=r.a.createContext(),N=function(e,t){var a=function(a,n){return{activeWorkout:Object(v.a)({},e.activeWorkout,{exercises:e.activeWorkout.exercises.map(function(e){return e.id===t.payload.id?Object(v.a)({},e,Object(O.a)({},n,a(e))):e})})}},n=function(a,n){return Object(v.a)({},e,{workouts:e.workouts.map(function(e){return e.exercises.some(function(e){return e.id===t.payload.id})?Object(v.a)({},e,{exercises:e.exercises.map(function(e){return e.id===t.payload.id?Object(v.a)({},e,Object(O.a)({},n,a(e))):e})}):e})})};switch(t.type){case"ADD_WORKOUT":var r=t.payload,c=r.workoutName,i=r.exercises,o={id:w()(),name:c,exercises:i.map(function(e){return{name:"test",sets:Array(parseInt(e.sets)).fill(parseInt(e.reps)),id:w()()}})};return console.log(o),Object(v.a)({},e,{workouts:[].concat(Object(b.a)(e.workouts),[o])});case"DELETE_WORKOUT":return Object(v.a)({},e,{workouts:e.workouts.filter(function(e){return e.id!=t.payload.id}),selectedWorkout:{id:null}});case"UPDATE_WORKOUT_NAME":return Object(v.a)({},e,{workouts:e.workouts.map(function(e){return e.id===t.payload.id?Object(v.a)({},e,{name:t.payload.name}):e})});case"SELECT_WORKOUT":return Object(v.a)({},e,{selectedWorkout:e.workouts.find(function(e){return e.id==t.payload.id})});case"DESELECT_WORKOUT":return Object(v.a)({},e,{selectedWorkout:{id:null}});case"ADD_EXERCISE":var s={id:w()(),name:"New Exercise",sets:[],weight:[]};switch(t.payload.isActive){case!0:return{activeWorkout:Object(v.a)({},e.activeWorkout,{exercises:[].concat(Object(b.a)(e.activeWorkout.exercises),[s])})};default:return Object(v.a)({},e,{workouts:e.workouts.map(function(e){return e.id===t.payload.id?Object(v.a)({},e,{exercises:[].concat(Object(b.a)(e.exercises),[s])}):e})})}case"UPDATE_EXERCISE_NAME":switch(t.payload.isActive){case!0:return Object(v.a)({},e);default:return n(function(){return t.payload.name},"name")}case"DELETE_EXERCISE":switch(t.payload.isActive){case!0:return{activeWorkout:Object(v.a)({},e.activeWorkout,{exercises:e.activeWorkout.exercises.filter(function(e){return e.id!==t.payload.id})})};default:return Object(v.a)({},e,{workouts:e.workouts.map(function(e){return e.exercises.some(function(e){return e.id===t.payload.id})?Object(v.a)({},e,{exercises:e.exercises.filter(function(e){return e.id!==t.payload.id})}):e})})}case"ADD_SET":var l=function(e){return[].concat(Object(b.a)(e.sets),[5])};switch(t.payload.isActive){case!0:return a(l,"sets");default:return n(l,"sets")}case"DELETE_SET":var u=t.payload.set-1,d=function(e){return[].concat(Object(b.a)(e.sets.slice(0,u)),Object(b.a)(e.sets.slice(u+1)))};switch(t.payload.isActive){case!0:return a(d,"sets");default:return n(d,"sets")}case"UPDATE_WEIGHT":var m=t.payload.set-1,E=parseInt(t.payload.weight);return a(function(e){return e.weight.map(function(e,t){return console.log(t,m),t==m?E:e})},"weight");case"INCREMENT_REP":var h=t.payload.set-1,p=function(e){var t=e.sets.slice();return t[h]=parseInt(t[h])+1,Object(b.a)(t)};switch(t.payload.isActive){case!0:return a(p,"sets");default:return n(p,"sets")}case"DECREMENT_REP":var f=t.payload.set-1,_=function(e){var t=e.sets.slice();return t[f]=parseInt(t[f])-1,Object(b.a)(t)};switch(t.payload.isActive){case!0:return a(_,"sets");default:return n(_,"sets")}case"LOAD_WORKOUT":var g=Object(v.a)({},e.selectedWorkout);return g.exercises.forEach(function(e){e.weight=[],e.sets.forEach(function(t){e.weight.push(0)})}),Object(v.a)({},e,{activeWorkout:g,id:t.payload.id,selectedWorkout:{id:null}});case"SAVE_WORKOUT":return Object(v.a)({},e,{history:[].concat(Object(b.a)(e.history),[e.activeWorkout]),activeWorkout:{id:null},date:new Date(Date.now())});case"VIEW_WORKOUT":return Object(v.a)({},e,{loggedWorkout:e.history.filter(function(e){return e.id==t.payload.id})[0]});default:return e}},x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedWorkout:{id:null},loggedWorkout:{},activeWorkout:{},workouts:[],history:[],dispatch:function(e){a.setState(function(t){return N(t,e)})}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("state");this.setState(JSON.parse(e))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("state",JSON.stringify(this.state))}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=j.Consumer,A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={workouts:{},date:{},isCurrentMonth:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Date.now(),t=new Date(e).getDate(),a=new Date(e).getMonth(),n=new Date(e).getFullYear(),r={today:t,month:a,year:n,nDays:new Date(n,a+1,0).getDate()};this.setState({date:r,isCurrentMonth:!0})}},{key:"getMonthName",value:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"][this.state.date.month]}},{key:"getNextMonth",value:function(e){var t,a=this.state.date.month+e;a<0?(a=11,t=this.state.date.year-1):a>11?(a=0,t=this.state.date.year+1):t=this.state.date.year;var n=new Date(t,a+1,0).getDate(),r=new Date(Date.now()).getMonth()==a;this.setState(Object(v.a)({},this.state,{date:Object(v.a)({},this.state.date,{month:a,year:t,nDays:n}),isCurrentMonth:r}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.date,n=t.isCurrentMonth;return r.a.createElement(C,null,function(t){var c=t.dispatch,i=t.history.filter(function(t){return t.date.getMonth()==e.state.date.month});return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:f.a.container},r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.arrow,onClick:function(){return e.getNextMonth(-1)}},r.a.createElement("i",{className:"fas fa-caret-left"})),r.a.createElement("div",{className:f.a.heading}," ",r.a.createElement("h2",null,e.getMonthName(),", ",a.year)),r.a.createElement("div",{className:f.a.arrow,onClick:function(){return e.getNextMonth(1)}},r.a.createElement("i",{className:"fas fa-caret-right"}))),r.a.createElement("div",{className:f.a.body},r.a.createElement(y,{date:a,isCurrentMonth:n,workouts:i,dispatch:c}))))})}}]),t}(n.Component),D=a(40),W=a.n(D),T=a(24),S=a.n(T),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={weight:e.weight},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.set,n=t.reps,c=t.id,i=t.isActive,o=t.dispatch;return r.a.createElement(C,null,function(t){return r.a.createElement("div",{className:S.a.set},r.a.createElement("div",null,a),r.a.createElement("div",{className:S.a.rep},r.a.createElement("div",null," ",r.a.createElement("i",{className:"".concat(S.a.adjust," fas fa-minus"),onClick:function(){return o({type:"DECREMENT_REP",payload:{set:a,id:c,isActive:i}})}})),r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("i",{className:"".concat(S.a.adjust," fas fa-plus"),onClick:function(){return o({type:"INCREMENT_REP",payload:{set:a,id:c,isActive:i}})}}))),i?r.a.createElement("div",null,r.a.createElement("input",{type:"number",name:"weight",value:e.state.weight,onChange:function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},onBlur:function(){var t=e.state.weight;console.log("Weight after blur from state ".concat(t)),e.props.dispatch({type:"UPDATE_WEIGHT",payload:{weight:t,id:c,set:a}})}})):null,r.a.createElement("div",null," ",r.a.createElement("i",{className:"".concat(S.a.delete," fas fa-minus"),onClick:function(){return o({type:"DELETE_SET",payload:{set:a,id:c,isActive:i}})}})))})}}]),t}(n.Component),M=a(11),I=a.n(M),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:e.name},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.dispatch,c=t.showExercise,i=t.toggleExerciseHandler,o=t.isActive,s=this.state.name;return r.a.createElement("div",{className:I.a.header},r.a.createElement("div",null,r.a.createElement("input",{style:{textAlign:c?"center":"left"},type:"text",name:"name",onChange:function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},value:s,className:"".concat(I.a.heading),onBlur:function(){n({type:"UPDATE_EXERCISE_NAME",payload:{name:s,id:a,isActive:o}})},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()}})),c?r.a.createElement("div",null):r.a.createElement("div",{className:I.a.tagContainer}),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-angle-down",onClick:function(){return i(c)}})),r.a.createElement("i",null))}}]),t}(n.Component);function F(e){var t=e.sets,a=e.id,n=e.dispatch,c=e.isActive,i=e.weight,o=e.showContent;return r.a.createElement("div",{className:I.a.body},o?r.a.createElement("div",{className:I.a.bodyHeadings},r.a.createElement("div",null,"Sets"),r.a.createElement("div",null,"Reps"),c?r.a.createElement("div",null,"Weight"):null,r.a.createElement("div",null)):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:I.a.bodyContent},t.map(function(e,t){return r.a.createElement(R,{reps:e,set:t+1,key:w()(),id:a,isActive:c,dispatch:n,weight:i[t]})})),r.a.createElement("div",{className:I.a.bodyFooter},r.a.createElement("button",{className:I.a.add},r.a.createElement("i",{className:"fas fa-plus",onClick:function(){return n({type:"ADD_SET",payload:{id:a,isActive:c}})}}," "))),o?r.a.createElement("div",{className:I.a.tagContainer}):r.a.createElement(r.a.Fragment,null))}function K(e){var t=e.dispatch,a=e.id,n=e.isActive;return r.a.createElement("div",{className:I.a.footer},r.a.createElement("button",{onClick:function(){return t({type:"DELETE_EXERCISE",payload:{id:a,isActive:n}})}},r.a.createElement("i",{className:"fas fa-trash"}),"Delete"))}var L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showExercise:!1,isActive:!1},a.onChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.toggleExercise=function(e){a.setState({showExercise:!e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.isActive;this.setState({isActive:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showExercise,n=t.isActive,c=this.props.exercise,i=c.sets,o=c.id,s=c.weight,l=c.name;this.props.exercise;return r.a.createElement(C,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:I.a.container},r.a.createElement(U,{id:o,name:l,dispatch:c,showExercise:a,onChangeHandler:e.onChange.bind(e),toggleExerciseHandler:e.toggleExercise.bind(e,a),isActive:n}),a?r.a.createElement("div",null,r.a.createElement(F,{id:o,dispatch:c,sets:i,isActive:n,weight:s,showContent:i.length>0}),r.a.createElement(K,{id:o,dispatch:c,isActive:n})):null)})}}]),t}(n.Component);a(82);function H(e){var t=e.exercises,a=e.isActive,n=e.id,c=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.map(function(e){return r.a.createElement(L,{key:e.id,exercise:e,isActive:a})})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c({type:"ADD_EXERCISE",payload:{id:n,isActive:a}})}},r.a.createElement("i",{className:"fas fa-plus"}," "),"Add Exercise")))}var P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showCard:!1,name:""},a.onChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.workout.name;this.setState({name:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showCard,n=t.name,c=this.props.workout,i=c.id,o=c.exercises,s=this.props.selected;return r.a.createElement(C,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{onClick:function(){return c({type:"SELECT_WORKOUT",payload:{id:i}})}},s?r.a.createElement("i",{className:"".concat(W.a.circle," ").concat(W.a.selected," far fa-check-circle")}):r.a.createElement("i",{className:"".concat(W.a.circle," far fa-circle")})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",onChange:e.onChange,value:n,className:"card__title",onKeyPress:function(e){"Enter"===e.key&&(e.target.blur(),c({type:"UPDATE_WORKOUT_NAME",payload:{name:n,id:i}}))}})),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-angle-down",onClick:function(){return e.setState({showCard:!a})}}))),a?r.a.createElement(H,{exercises:o,id:i,isActive:!1,dispatch:c}):null)})}}]),t}(n.Component),B=a(186),J=(a(83),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nextID:w()(),showModal:!1},a.clickIsOutside=function(e){var t=e.target.classList.contains("container"),a=e.target.classList.contains("content");return t||a},a.clearSelections=function(e,t){a.clickIsOutside(e)&&t({type:"DESELECT_WORKOUT",payload:null})},a.containsWorkouts=function(e){return"undefined"!==typeof e&&e.length>0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C,null,function(t){var a=t.dispatch,n=t.workouts,c=t.selectedWorkout;return r.a.createElement(r.a.Fragment,null,console.log(e),e.containsWorkouts(n)?r.a.createElement("div",{className:"content",onClick:function(t){return e.clearSelections(t,a)}},r.a.createElement("div",{className:"contentHeading"},e.containsWorkouts(n)?c.id?r.a.createElement("h2",null,"Start your Workout!"):r.a.createElement("h2",null,"Select A Workout"):r.a.createElement("h2",null,"Create a Workout")),r.a.createElement("div",{className:"contentBody"},r.a.createElement("div",{className:"container"},n.map(function(e){return r.a.createElement(P,{key:e.id,workout:e,selected:c.id==e.id})}))),c.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:{pathname:"/active/".concat(e.state.nextID)}},r.a.createElement("div",{className:"main__button green",onClick:function(){return a({type:"LOAD_WORKOUT",payload:e.state.nextID})}}," ",r.a.createElement("i",{className:"fas fa-play"}))),r.a.createElement("div",{className:"alt__button red",onClick:function(){return a({type:"DELETE_WORKOUT",payload:{id:c.id}})}},r.a.createElement("i",{className:"fa fa-trash"}))):r.a.createElement(m.a,{to:"/new"},r.a.createElement("div",{className:"main__button red"},r.a.createElement("i",{className:"fas fa-plus"})))):r.a.createElement(B.a,{to:"/new"}))})}}]),t}(n.Component)),V=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C,null,function(t){var a=t.dispatch,n=e.props.workout;return console.log(n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null),r.a.createElement(H,{exercises:n.exercises,id:n.id,isActive:!0,dispatch:a}),r.a.createElement(m.a,{to:{pathname:"/"}},r.a.createElement("div",{className:"main__button green"},r.a.createElement("i",{className:"fas fa-flag-checkered"})))))})}}]),t}(n.Component);a(70),a(50);var X=a(17),G=a(18),Y=a.n(G),Q=a(41),Z=a.n(Q);function q(e){var t,a=e.suggestions,c=e.changeHandler,i=e.exerciseIndex,o=Object(n.useState)(0),s=Object(X.a)(o,2),l=s[0],u=s[1],d=Object(n.useState)([]),m=Object(X.a)(d,2),E=m[0],h=m[1],v=Object(n.useState)(!1),p=Object(X.a)(v,2),f=p[0],_=p[1],g=Object(n.useState)(""),y=Object(X.a)(g,2),b=y[0],O=y[1],k=function(e){O(e.currentTarget.innerText),_(!1),h([]),u(0)};return f&&b&&(t=E.length?r.a.createElement("ul",{className:Z.a.suggestions},E.map(function(e,t){var a;return t===l&&(a=Z.a.suggestionActive),r.a.createElement("li",{className:a,key:e,onClick:k},e)})):r.a.createElement("div",{className:Z.a.suggestionActive},r.a.createElement("em",null,"Create New Exercise"))),r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",onChange:function(e){var t=e.currentTarget.value,n=a.filter(function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1});c(e,i,"name"),O(t),_(!0),h(n),u(0)},onKeyDown:function(e){switch(e.keyCode){case 13:u(0),_(!1),O(E[l]);case 38:if(0===l)return;u(l-1);case 40:if(l-1===E.length)return;u(l+1)}},value:b,placeholder:"Add Exercise",onBlur:function(e){_(!1)}}),t)}function z(e){var t=e.exercise,a=e.index,n=e.changeHandler;return r.a.createElement("div",{className:Y.a.exerciseForm},r.a.createElement("div",null,r.a.createElement(q,{suggestions:["Deadlift","Squat","Bicep Curls"],changeHandler:n,exerciseIndex:a})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{type:"number",placeholder:"Sets",value:t.sets,onChange:function(e){return n(e,a,"sets")}})),r.a.createElement("div",null,r.a.createElement("input",{type:"number",placeholder:"Reps",value:t.reps,onChange:function(e){return n(e,a,"reps")}}))))}var $=function(e){var t=Object(n.useState)(e),a=Object(X.a)(t,2),r=a[0],c=a[1];return{value:r,setValue:c,bind:{value:r,onChange:function(e){c(e.target.value)}}}};function ee(e){var t=e.dispatch,a=$(""),c=a.value,i=a.bind,o=Object(n.useState)([{name:"",sets:"",reps:""}]),s=Object(X.a)(o,2),l=s[0],u=s[1],d=l[0].sets&&l[0].name&&l[0].reps&&c,E=function(e,t,a){var n=Object(b.a)(l),r=Object(v.a)({},n[t]);r[a]=e.target.value,n[t]=r,u(n)};return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"contentHeading"},r.a.createElement("h2",null,"Create New Workout")),r.a.createElement("div",{className:"contentBody"},r.a.createElement("div",{className:"card"},r.a.createElement("form",{className:Y.a.form},r.a.createElement("div",{className:Y.a.container},r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("input",Object.assign({type:"text",placeholder:"Enter Workout Name"},i,{name:"name"})))),l.map(function(e,t){return r.a.createElement(z,{key:t,exercise:e,index:t,changeHandler:E})}))),r.a.createElement("button",{onClick:function(){return u([].concat(Object(b.a)(l),[{name:"",sets:"",reps:""}]))}},r.a.createElement("i",{className:"fas fa-plus"}," "))),d?r.a.createElement("div",{className:"main__button green",onClick:function(e){return function(e){e.preventDefault(),t({type:"ADD_WORKOUT",payload:{workoutName:c,exercises:l}})}(e)}},r.a.createElement(m.a,{to:"/",className:Y.a.link},r.a.createElement("i",{className:"fas fa-paper-plane ".concat(Y.a.icon)})," ")):r.a.createElement("div",{className:"main__button ".concat(Y.a.notClickable)},r.a.createElement("i",{className:"fas fa-paper-plane ".concat(Y.a.icon)})," ")))}var te=a(185),ae=a(188),ne=a(187),re=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement("div",{className:"App"},r.a.createElement(te.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(ae.a,null,r.a.createElement(C,null,function(e){var t=e.loggedWorkout,a=e.activeWorkout,n=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{path:"/gymlog",component:J,exact:!0}),r.a.createElement(ne.a,{path:"/",component:J,exact:!0}),r.a.createElement(ne.a,{path:"/active/:id",render:function(){return r.a.createElement(V,{workout:a})}}),r.a.createElement(ne.a,{path:"/history",component:A,exact:!0}),r.a.createElement(ne.a,{path:"/history/:id",render:function(){return r.a.createElement(V,{workout:t})}}),r.a.createElement(ne.a,{path:"/new",render:function(){return r.a.createElement(ee,{dispatch:n})},exact:!0}))})),r.a.createElement(E,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,a){e.exports={container:"month_container__K92BU",header:"month_header__2GMUB",body:"month_body__1EmDC",dateCell:"month_dateCell__3mJxN",today:"month_today__14ox0",workoutDay:"month_workoutDay__GRZ6d",inner:"month_inner__2MKVb"}},22:function(e,t,a){e.exports={header:"calendar_header__2IEYp",container:"calendar_container__R5SNQ",heading:"calendar_heading__3A1jY",arrow:"calendar_arrow__2lD9k"}},24:function(e,t,a){e.exports={set:"set_set__1VtpF",rep:"set_rep__1OITJ",adjust:"set_adjust__2je4c",delete:"set_delete__3P2YZ"}},40:function(e,t,a){e.exports={selected:"workout_selected__1wutO",circle:"workout_circle__1TvW_"}},41:function(e,t,a){e.exports={noSuggestions:"autocomplete_noSuggestions__g8hyO",suggestions:"autocomplete_suggestions__24vME",suggestionActive:"autocomplete_suggestionActive__1n6zg"}},50:function(e,t,a){e.exports={container:"graph_container__11n5v",chart:"graph_chart__1BI0L"}},72:function(e,t,a){e.exports=a(183)},77:function(e,t,a){},82:function(e,t,a){e.exports={selected:"workout_selected__v-RRP",circle:"workout_circle__2ad63"}},83:function(e,t,a){e.exports={Overlay:"workoutLauncher_Overlay__10UoO"}}},[[72,1,2]]]);
//# sourceMappingURL=main.83cb8d45.chunk.js.map