import{m as o,C as n,M as l}from"./index.533481c4.js";import{s as r,c as d}from"./clipboard.e8b7d75a.js";window.Alpine=o;o.data("SettingsForm",()=>({success:null,error:null,initial:null,errors:[],init(){this.initial=r(this.$el)},async updateProfile(){this.success=null,this.error=null,this.errors=[];let e=r(this.$el,this.initial,!0);e.fields=[];for(const s in e)if(s.match(/fields\[\d+\]/)){let i={},a=parseInt(s.slice(7,-1));i.field_id=a,i.value=e[s],e.fields.push(i),delete e[s]}const t=await n.pages.settings.updateSettings(e);t.success?(this.success=!0,this.error=!1,setTimeout(()=>{this.success=null,this.error=null},3e3)):(this.success=!1,this.error=!0,Object.keys(t.errors).map(s=>{const i=t.errors[s];this.errors.push(i)}))}}));o.data("TokensForm",()=>({token:null,async generateToken(){const e=r(this.$el);e.expiration||delete e.expiration;const t=await n.pages.settings.generateToken(e);this.token=t.data.value,new l(this.$refs.tokenModal).show()},copyToken(){d(this.$refs.token)}}));o.data("Tokens",()=>({selectedTokenId:null,async deleteTokenModal(e){this.selectedTokenId=e,new l(this.$refs.confirmModal).show()},async deleteSelectedToken(){await n.pages.settings.deleteToken(this.selectedTokenId);const e=this.$refs[`token-${this.selectedTokenId}`];e&&e.remove()}}));o.start();
