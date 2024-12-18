import React from 'react'

export type email = {
  username: string;
  msg: string;
  time: string;
}

export type SingleEmailStrip = {
  email: email;
}


export function shortenTHeEmail(email:email):string{
  const message = email.msg;
  if(!email?.msg && typeof message !== 'string') return '';
  return message.length>30? message.slice(0,30)+' ...': message;
}

const SingleEmailStrip:React.FC<SingleEmailStrip> = React.memo(({email}) => {
  return (
    <tr className='hover:bg-gray-100 cursor-pointer'>
        <td className="flex justify-between items-center p-4">
            <div className='flex justify-center align-middle'>
              <span className="font-bold">{email.username}</span>
              <p className="mx-2 text-sm text-gray-600">{shortenTHeEmail(email)}</p>
            </div>
            <span className="text-gray-500 text-sm">{email.time}</span>
        </td>
    </tr>
  )
});

export default SingleEmailStrip







