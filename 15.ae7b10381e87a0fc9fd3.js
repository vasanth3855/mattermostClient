(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1133:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t(140);var r=t(34),s=t.n(r),o=t(6),l=t.n(o),i=t(1106),n=t(1104);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class p extends l.a.PureComponent{render(){return l.a.createElement("div",{id:"back_button",className:"signup-header"},l.a.createElement(n.a,{onClick:this.props.onClick,to:this.props.url},l.a.createElement(i.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>l.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),l.a.createElement(i.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(p,"propTypes",{url:s.a.string,onClick:s.a.func}),c(p,"defaultProps",{url:"/"})},1139:function(e,a,t){e.exports=t.p+"files/87b80d01a017833f1357800bfca49cea.png"},1234:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t(62),t(71);var r=t(34),s=t.n(r),o=t(6),l=t.n(o),i=t(1106),n=t(14),c=t(17),p=t(1150),m=t(1127);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class u extends l.a.PureComponent{constructor(e){super(e),d(this,"handleChange",e=>{e.preventDefault();const a=e.target.value.trim().replace(/\s/g,"");a!==this.state.token&&this.setState({token:a})}),d(this,"handleSubmit",e=>{e.preventDefault();const a={serverError:"",saving:!0};this.setState(a),this.props.submit(this.props.loginId,this.props.password,this.state.token)}),this.state={saving:!1,token:"",serverError:""}}render(){let e,a="";return this.state.serverError&&(e=l.a.createElement("label",{className:"control-label"},this.state.serverError),a=" has-error"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"signup__email-container"},l.a.createElement("p",null,l.a.createElement(i.a,{id:"login_mfa.enterToken",defaultMessage:"To complete the sign in process, please enter a token from your smartphone's authenticator"})),l.a.createElement("div",{className:"form-group"+a},e),l.a.createElement("div",{className:"form-group"+a},l.a.createElement(m.a,{type:"text",className:"form-control",name:"token",placeholder:{id:Object(c.b)("login_mfa.token"),defaultMessage:"MFA Token"},spellCheck:"false",autoComplete:"off",autoFocus:!0,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{saving:this.state.saving,disabled:this.state.saving,onClick:this.handleSubmit,defaultMessage:Object(n.jb)("login_mfa.submit","Submit"),savingMessage:Object(n.jb)("login_mfa.submitting","Submitting...")}))))}}d(u,"propTypes",{loginId:s.a.string.isRequired,password:s.a.string.isRequired,submit:s.a.func.isRequired})},1977:function(e,a,t){"use strict";t.r(a);var r=t(310),s=t(11),o=t(22),l=t(15),i=t(14),n=(t(115),t(174),t(36),t(597),t(34)),c=t.n(n),p=t(6),m=t.n(p),d=t(1105),u=t(1139),h=t.n(u),f=t(1133),w=t(1106),E=t(1126),b=t(0),g=t(17),_=t(1127);function v(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class P extends m.a.PureComponent{constructor(e){super(e),v(this,"submit",e=>{e.preventDefault();const a={},t=this.passwordInput.current.value;if(!t)return a.error=i.jb("claim.oauth_to_email.enterPwd","Please enter a password."),void this.setState(a);const{valid:r,error:s}=i.gb(t,this.props.passwordConfig);if(!r&&s)return void this.setState({error:s});const o=this.passwordConfirmInput.current.value;if(!o||t!==o)return a.error=i.jb("claim.oauth_to_email.pwdNotMatch","Passwords do not match."),void this.setState(a);a.error=null,this.setState(a),Object(E.w)(this.props.currentType,this.props.email,t,e=>{e.follow_link&&(window.location.href=e.follow_link)},e=>{this.setState({error:e.message})})}),this.state={},this.passwordInput=m.a.createRef(),this.passwordConfirmInput=m.a.createRef()}render(){var e=null;this.state.error&&(e=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.error)));var a="form-group";e&&(a+=" has-error");const t="".concat(this.props.currentType===b.Q.SAML_SERVICE?b.Q.SAML_SERVICE.toUpperCase():i.sb(this.props.currentType)," SSO");return m.a.createElement("div",null,m.a.createElement("h3",null,m.a.createElement(w.a,{id:"claim.oauth_to_email.title",defaultMessage:"Switch {type} Account to Email",values:{type:t}})),m.a.createElement("form",{onSubmit:this.submit},m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.oauth_to_email.description",defaultMessage:"Upon changing your account type, you will only be able to login with your email and password."})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.oauth_to_email.enterNewPwd",defaultMessage:"Enter a new password for your {site} email account",values:{site:this.props.siteName}})),m.a.createElement("div",{className:a},m.a.createElement(_.a,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:Object(g.b)("claim.oauth_to_email.newPwd"),defaultMessage:"New Password"},spellCheck:"false"})),m.a.createElement("div",{className:a},m.a.createElement(_.a,{type:"password",className:"form-control",name:"passwordconfirm",ref:this.passwordConfirmInput,placeholder:{id:Object(g.b)("claim.oauth_to_email.confirm"),defaultMessage:"Confirm Password"},spellCheck:"false"})),e,m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement(w.a,{id:"claim.oauth_to_email.switchTo",defaultMessage:"Switch {type} to Email and Password",values:{type:t}}))))}}v(P,"propTypes",{currentType:c.a.string,email:c.a.string,siteName:c.a.string,passwordConfig:c.a.object});var y=t(1234);function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class S extends m.a.PureComponent{constructor(e){super(e),N(this,"preSubmit",e=>{e.preventDefault();var a={},t=this.passwordInput.current.value;if(!t)return a.error=i.jb("claim.email_to_oauth.pwdError","Please enter your password."),void this.setState(a);this.setState({password:t}),a.error=null,this.setState(a),this.submit(this.props.email,t,"")}),N(this,"submit",(e,a,t)=>{Object(E.k)(e,a,t,this.props.newType,e=>{e.follow_link&&(window.location.href=e.follow_link)},e=>{this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==e.server_error_id?this.setState({error:e.message,showMfa:!1}):this.setState({showMfa:!0})})}),this.state={showMfa:!1,password:""},this.passwordInput=m.a.createRef()}render(){var e=null;this.state.error&&(e=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.error)));var a="form-group";e&&(a+=" has-error");const t=this.props.newType===b.Q.SAML_SERVICE?b.Q.SAML_SERVICE.toUpperCase():i.sb(this.props.newType),r="".concat(t," SSO");let s;return s=this.state.showMfa?m.a.createElement(y.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):m.a.createElement("form",{onSubmit:this.preSubmit},m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_oauth.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with {type} SSO",values:{type:t}})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_oauth.ssoNote",defaultMessage:"You must already have a valid {type} account",values:{type:t}})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_oauth.enterPwd",defaultMessage:"Enter the password for your {site} account",values:{site:this.props.siteName}})),m.a.createElement("div",{className:a},m.a.createElement(_.a,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:Object(g.b)("claim.email_to_oauth.pwd"),defaultMessage:"Password"},spellCheck:"false"})),e,m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement(w.a,{id:"claim.email_to_oauth.switchTo",defaultMessage:"Switch Account to {uiType}",values:{uiType:r}}))),m.a.createElement("div",null,m.a.createElement("h3",null,m.a.createElement(w.a,{id:"claim.email_to_oauth.title",defaultMessage:"Switch Email/Password Account to {uiType}",values:{uiType:r}})),s)}}N(S,"propTypes",{newType:c.a.string,email:c.a.string,siteName:c.a.string});t(100);function M(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class C extends m.a.Component{constructor(e){super(e),M(this,"preSubmit",e=>{e.preventDefault();var a={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:""};const t=this.ldapPasswordInput.current.value;if(!t)return a.ldapPasswordError=i.jb("claim.ldap_to_email.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(a);const r=this.passwordInput.current.value;if(!r)return a.passwordError=i.jb("claim.ldap_to_email.pwdError","Please enter your password."),void this.setState(a);const{valid:s,error:o}=i.gb(r,this.props.passwordConfig);if(!s&&o)return void this.setState({passwordError:o});const l=this.passwordConfirmInput.current.value;if(!l||r!==l)return a.confirmError=i.jb("claim.ldap_to_email.pwdNotMatch","Passwords do not match."),void this.setState(a);a.password=r,a.ldapPassword=t,this.setState(a),this.submit(this.props.email,r,"",t)}),M(this,"submit",(e,a,t,r)=>{this.props.switchLdapToEmail(r||this.state.ldapPassword,this.props.email,a,t).then(({data:e,error:a})=>{e&&e.follow_link?window.location.href=e.follow_link:a&&(a.server_error_id.startsWith("model.user.is_valid.pwd")?this.setState({passwordError:a.message,showMfa:!1}):"ent.ldap.do_login.invalid_password.app_error"===a.server_error_id?this.setState({ldapPasswordError:a.message,showMfa:!1}):this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==a.server_error_id?this.setState({serverError:a.message,showMfa:!1}):this.setState({showMfa:!0}))})}),this.state={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:""},this.ldapPasswordInput=m.a.createRef(),this.passwordInput=m.a.createRef(),this.passwordConfirmInput=m.a.createRef()}render(){let e=null,a="form-group";this.state.serverError&&(e=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.serverError)),a+=" has-error");let t=null,r="form-group";this.state.passwordError&&(t=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.passwordError)),r+=" has-error");let s=null,o="form-group";this.state.ldapPasswordError&&(s=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),o+=" has-error");let l=null,n="form-group";this.state.confirmError&&(l=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.confirmError)),n+=" has-error");const c=i.jb("claim.ldap_to_email.ldapPwd","AD/LDAP Password");let p;return p=this.state.showMfa?m.a.createElement(y.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):m.a.createElement("form",{onSubmit:this.preSubmit,className:a},m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.ldap_to_email.email",defaultMessage:"After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",values:{email:this.props.email}})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.ldap_to_email.enterLdapPwd",defaultMessage:"{ldapPassword}:",values:{ldapPassword:c}})),m.a.createElement("div",{className:o},m.a.createElement("input",{type:"password",className:"form-control",name:"ldapPassword",ref:this.ldapPasswordInput,placeholder:c,spellCheck:"false"})),s,m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.ldap_to_email.enterPwd",defaultMessage:"New email login password:"})),m.a.createElement("div",{className:r},m.a.createElement(_.a,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:Object(g.b)("claim.ldap_to_email.pwd"),defaultMessage:"Password"},spellCheck:"false"})),t,m.a.createElement("div",{className:n},m.a.createElement(_.a,{type:"password",className:"form-control",name:"passwordconfirm",ref:this.passwordConfirmInput,placeholder:{id:Object(g.b)("claim.ldap_to_email.confirm"),defaultMessage:"Confirm Password"},spellCheck:"false"})),l,m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement(w.a,{id:"claim.ldap_to_email.switchTo",defaultMessage:"Switch account to email/password"})),e),m.a.createElement("div",null,m.a.createElement("h3",null,m.a.createElement(w.a,{id:"claim.ldap_to_email.title",defaultMessage:"Switch AD/LDAP Account to Email/Password"})),p)}}M(C,"propTypes",{email:c.a.string,passwordConfig:c.a.object,switchLdapToEmail:c.a.func.isRequired});t(71);function I(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class k extends m.a.Component{constructor(e){super(e),I(this,"preSubmit",e=>{e.preventDefault();var a={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:""};const t=this.emailPasswordInput.current&&this.emailPasswordInput.current.value;if(!t)return a.passwordError=i.jb("claim.email_to_ldap.pwdError","Please enter your password."),void this.setState(a);const r=this.ldapIdInput.current&&this.ldapIdInput.current.value.trim();if(!r)return a.ldapError=i.jb("claim.email_to_ldap.ldapIdError","Please enter your AD/LDAP ID."),void this.setState(a);const s=this.ldapPasswordInput.current&&this.ldapPasswordInput.current.value;if(!s)return a.ldapPasswordError=i.jb("claim.email_to_ldap.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(a);a.password=t,a.ldapId=r,a.ldapPassword=s,this.setState(a),this.submit(this.props.email,t,"",r,s)}),I(this,"submit",(e,a,t,r,s)=>{Object(E.j)(e,a,t,r||this.state.ldapId,s||this.state.ldapPassword,e=>{e.follow_link&&(window.location.href=e.follow_link)},e=>{if(this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==e.server_error_id)switch(e.id){case"ent.ldap.do_login.user_not_registered.app_error":case"ent.ldap.do_login.user_filtered.app_error":case"ent.ldap.do_login.matched_to_many_users.app_error":this.setState({ldapError:e.message,showMfa:!1});break;case"ent.ldap.do_login.invalid_password.app_error":this.setState({ldapPasswordError:e.message,showMfa:!1});break;case"api.user.check_user_password.invalid.app_error":this.setState({passwordError:e.message,showMfa:!1});break;default:this.setState({serverError:e.message,showMfa:!1})}else this.setState({showMfa:!0})})}),this.state={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:"",showMfa:!1},this.emailPasswordInput=m.a.createRef(),this.ldapIdInput=m.a.createRef(),this.ldapPasswordInput=m.a.createRef()}render(){let e=null,a="form-group";this.state.serverError&&(e=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.serverError)),a+=" has-error");let t=null,r="form-group";this.state.passwordError&&(t=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.passwordError)),r+=" has-error");let s=null,o="form-group";this.state.ldapError&&(s=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.ldapError)),o+=" has-error");let l,n,c=null,p="form-group";return this.state.ldapPasswordError&&(c=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),p+=" has-error"),l=this.props.ldapLoginFieldName?this.props.ldapLoginFieldName:i.jb("claim.email_to_ldap.ldapId","AD/LDAP ID"),n=this.state.showMfa?m.a.createElement(y.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):m.a.createElement("form",{onSubmit:this.preSubmit,className:a},m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_ldap.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with AD/LDAP"})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_ldap.ssoNote",defaultMessage:"You must already have a valid AD/LDAP account"})),m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_ldap.enterPwd",defaultMessage:"Enter the password for your {site} email account",values:{site:this.props.siteName}})),m.a.createElement("input",{type:"text",style:j.usernameInput,name:"fakeusernameremembered"}),m.a.createElement("div",{className:r},m.a.createElement(_.a,{type:"password",className:"form-control",name:"emailPassword",ref:this.emailPasswordInput,autoComplete:"off",placeholder:{id:Object(g.b)("claim.email_to_ldap.pwd"),defaultMessage:"Password"},spellCheck:"false"})),t,m.a.createElement("p",null,m.a.createElement(w.a,{id:"claim.email_to_ldap.enterLdapPwd",defaultMessage:"Enter the ID and password for your AD/LDAP account"})),m.a.createElement("div",{className:o},m.a.createElement("input",{type:"text",className:"form-control",name:"ldapId",ref:this.ldapIdInput,autoComplete:"off",placeholder:l,spellCheck:"false"})),s,m.a.createElement("div",{className:p},m.a.createElement(_.a,{type:"password",className:"form-control",name:"ldapPassword",ref:this.ldapPasswordInput,autoComplete:"off",placeholder:{id:Object(g.b)("claim.email_to_ldap.ldapPwd"),defaultMessage:"AD/LDAP Password"},spellCheck:"false"})),c,m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement(w.a,{id:"claim.email_to_ldap.switchTo",defaultMessage:"Switch Account to AD/LDAP"})),e),m.a.createElement("div",null,m.a.createElement("h3",null,m.a.createElement(w.a,{id:"claim.email_to_ldap.title",defaultMessage:"Switch Email/Password Account to AD/LDAP"})),n)}}I(k,"propTypes",{email:c.a.string,siteName:c.a.string,ldapLoginFieldName:c.a.string});const j={usernameInput:{display:"none"}};class A extends m.a.PureComponent{render(){const e=new URLSearchParams(this.props.location.search).get("email"),a=new URLSearchParams(this.props.location.search).get("new_type"),t=new URLSearchParams(this.props.location.search).get("old_type");return m.a.createElement("div",null,m.a.createElement(f.a,null),m.a.createElement("div",{className:"col-sm-12"},m.a.createElement("div",{className:"signup-team__container"},m.a.createElement("img",{alt:"signup logo",className:"signup-team-logo",src:h.a}),m.a.createElement("div",{id:"claim"},m.a.createElement(d.d,null,m.a.createElement(d.b,{path:"".concat(this.props.match.url,"/oauth_to_email"),render:()=>m.a.createElement(P,{currentType:t,email:e,siteName:this.props.siteName,passwordConfig:this.props.passwordConfig})}),m.a.createElement(d.b,{path:"".concat(this.props.match.url,"/email_to_oauth"),render:()=>m.a.createElement(S,{newType:a,email:e,siteName:this.props.siteName})}),m.a.createElement(d.b,{path:"".concat(this.props.match.url,"/ldap_to_email"),render:()=>m.a.createElement(C,{email:e,passwordConfig:this.props.passwordConfig,switchLdapToEmail:this.props.actions.switchLdapToEmail})}),m.a.createElement(d.b,{path:"".concat(this.props.match.url,"/email_to_ldap"),render:()=>m.a.createElement(k,{email:e,siteName:this.props.siteName,ldapLoginFieldName:this.props.ldapLoginFieldName})}))))))}}var L,T,D;L=A,T="propTypes",D={location:c.a.object.isRequired,siteName:c.a.string,ldapLoginFieldName:c.a.string,passwordConfig:c.a.object,match:c.a.shape({url:c.a.string.isRequired}).isRequired,actions:c.a.shape({switchLdapToEmail:c.a.func.isRequired}).isRequired},T in L?Object.defineProperty(L,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):L[T]=D;a.default=Object(r.connect)((function(e){const a=Object(l.getConfig)(e);return{siteName:a.SiteName,ldapLoginFieldName:a.LdapLoginFieldName,passwordConfig:Object(i.D)(a)}}),(function(e){return{actions:Object(s.bindActionCreators)({switchLdapToEmail:o.switchLdapToEmail},e)}}))(A)}}]);
//# sourceMappingURL=15.ae7b10381e87a0fc9fd3.js.map