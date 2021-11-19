import React, { FC, useState } from 'react';
import axios from 'axios';

import { useLocalStorage, useSearchParam } from 'react-use';
import { Redirect } from 'react-router';

export const Callback: FC = () => {
  const code = useSearchParam('code');
  const [loading, setLoading] = useState(true);
  const [lsprofile, setLsProfile] = useLocalStorage('DISCORD_PROFILE');

  React.useEffect(() => {
      if (code) {
        axios.get(`https://us-central1-starhorizonsdemo.cloudfunctions.net/discordRequest?code=${code}`)
        .then(res => setLsProfile(res.data))
        .catch(e => console.log(e));
      }
}, [])

React.useEffect(() => {
  if(code && loading && lsprofile) {
    setLoading(false);
  }
}, [code, lsprofile, loading]);

return (<>
<div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
  <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
    {loading ? <button className="btn btn-lg btn-circle loading"></button>  : <Redirect to="/" />}
  </div>
</div>
</>)
}