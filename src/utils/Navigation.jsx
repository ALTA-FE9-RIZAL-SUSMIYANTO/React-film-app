import React  from 'react'
import {useNavigate, useParams} from 'react-router-dom'



// High Order Component (HOC) sebuah component yg hirarkinya lebih tinggi dari pada komponent biasa

export const WithRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams();
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} params={params} />
    };

  return Wrapper;
}

