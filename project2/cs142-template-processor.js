"use strict";

function Cs142TemplateProcessor(template) {
  this.template=template;
}

Cs142TemplateProcessor.prototype.fillIn=function(dic) {
  let str=this.template;
  for(const key in dic) {
    if(Object.prototype.hasOwnProperty.call(dic, key)) {
      const regex=new RegExp(`{{${key}}}`, 'g');
      str=str.replace(regex, dic[key]);
    }   
  }
  return str;
};