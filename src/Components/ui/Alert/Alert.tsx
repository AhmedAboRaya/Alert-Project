import "./Alert.scss"
import { X } from 'lucide-react';
import { ReactNode } from "react";
import { AlertTypes } from "../../../Types";

interface IProps {
    type: AlertTypes;
    icon: ReactNode;
    title: string;
    description: string;
}

const Alert = ({ type, icon, title, description }: IProps) => {
    return (
        <div className={type}> 
            <div className="alert-header">
                <div className="title">
                    {icon}
                    <h3>{title}</h3>
                </div>
                
                <X size={20} className="close"/>
            </div>
            
            <p>{description}</p>
        </div>
    )
}

export default Alert