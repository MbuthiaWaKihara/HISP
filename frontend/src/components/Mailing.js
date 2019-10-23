import axios from 'axios';

export const SendMail = (info) =>
{
    return axios
    .post('/api/email',info,{
        header : {
            'Content-type' : 'application/json',
        }
    })
    .then(
        response =>
        {
            console.log(response);
        }
    )
    .catch(
        error =>
        {
            console.log(error);
        }
    )

}
