import React from "react";
import Section from "./Section";
import Navbar from "../../../components/public/Navbar/Navbar";

function SectionView({userProfile ,sections,id,type} : {userProfile : any;sections:any;id:any;type:any}){
    console.log("in section view",userProfile,sections,id,type)
    return(
        <div>
            <Navbar userProfile={userProfile} sections={sections} type={type}/>
            {sections.filter((section:any) => section._id===id).map((section:any)=><Section key={section._id} section={section}/>)}
        </div>

    )
}

export default SectionView;
