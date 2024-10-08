import { useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {

  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false)

  const call = useCall();

  if(!call){
    throw new Error('usecall must be used within StreamCall component')
  }
  useEffect(() => {
    if(isMicCamToggleOn){
      call?.camera.disable();
      call?.microphone.disable();
    }else{
      call?.camera.enable();
      call?.microphone.enable();

    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone])
  
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='tet-2xl font-bold'>Setup</h1>
      <VideoPreview/>
      <div className='flex h-16 items-center'>

      </div>

    </div>
  )
}

export default MeetingSetup