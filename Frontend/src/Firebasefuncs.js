import React from 'react'
import { doc,collection, getDoc, setDoc, updateDoc,query ,getCountFromServer,where} from 'firebase/firestore'
import { db } from './Firebase'
import { date } from './components/Date/Date'

// import { Liquor } from '@mui/icons-material';

const l1=['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '49', '50', '51', '52', '54', '55', '56', '57', '58', '59', '60', 'L01', 'L02', 'L03', 'L04', 'L05', 'L06']
var totalnoofdays=-1;
export const intialiseAttendance=async()=>{
    const  docref=await doc(db,"Attendance",date);
    const snap=await getDoc(docref);
    if(snap.exists()){
        //do nothing
        console.log("doc has been intialised before "+date);
    }
    else{
        const ele=date;
        await setDoc(doc(db,"Attendance",ele),{});
        console.log("doc has been intialise now "+date)
    }
}
// export const prevdate="j";

// export dailyreport=async(date)=>{
//     const data=await databaseRef(date);

// }
export const totalpresent=async(date)=>{
    // console.log("hello")
    const data=await databaseRef(date);
    var present=0;
    Object.keys(data).forEach(key=>{
        if(data[key]===true){
            present+=1;
        }
        
    }
    );
    console.log("present",present);
    return present;
}
export const databaseRef=async()=>{
    const ref=await doc(db,"Attendance",date);
    const dref=await getDoc(ref);
    // console.log(dref.data());
   return  dref.data();
   
}
export const updateAttendance=async(l)=>{
    console.log("updated");
    const ref=await doc(db,"Attendance",date);
    const d1={

    }
    l.forEach(el=>{
        // console.log(el);
        // if(el[0]==='P')el=el.slice(2);
        d1[el]=true;
    })
    
    await updateDoc(ref,d1);

}

export const Updatereport=async()=>{
    const ref=await doc(db,"Reports","latest");
    const col=await getDoc(ref);
    const data=col.data();
    if(data["date"]!==date){
        data["date"]=date;
        for(let i=0;i<l1.length;i++){
            data[l1[i]]=await getreport(l1[i]);
        }
        console.log(data);
        await setDoc(ref,data);
    }   
}
export const getstoredReport=async()=>{
    const ref=await doc(db,"Reports","latest");
    const col=await getDoc(ref);
    const data=col.data();
    
    return data;
}
export const getreport=async(stuid)=>{
    // let id=stuid;
    if(totalnoofdays===-1){
        const coll = collection(db, "Attendance");
    const snapshot = await getCountFromServer(coll);
    totalnoofdays=snapshot.data().count;
    

    }
    // if(stuid[0]==='L'){
    //     stuid=stuid.slice(2);
    //     stuid="L"+stuid;
    // }
    // else {
    //     stuid=stuid.slice(3);
    // }
  
    const collectionRef = await collection(db,"Attendance");
    const q = query(collectionRef, where(stuid, "==", true));
     const c=await getCountFromServer(q);
 
    return (((c.data().count)/totalnoofdays)*100).toFixed(2);
}
export const markAttendance=async(stuid,flag)=>{
    const ref=await doc(db,"Attendance",date)
    // const attendancedata=databaseRef(date);
    // console.log(stuid);
    const data1={
    }
    
    data1[stuid]=flag;
    // console.log(present);
    await updateDoc(ref,data1);
}
export const getAttendance=async(stuid)=>{

    const docRef = doc(db, "Attendance", date);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data()[stuid]);
    return docSnap.data()[stuid]
}

export const Firebasefuncs = () => {
    
  
   
  return (
    <div>Firebasefuncs</div>
  )
}
