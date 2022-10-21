const moment=require('moment');

const helpers={};
helpers.dateList=(date)=>{
    moment.locale('es')
return moment(date).format('LLLL')
}
module.exports=helpers