import { StreamRepository, StreamResolutions } from '@amityco/js-sdk'

import { AmityLive } from '@amityco/react-native-live';
import { RtcView } from 'react-native-webrtc';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useState } from 'react';


export function createStream()
{
    const liveObject = StreamRepository.createStream({
        title: 'title',
        // thumbnailFileId: 'fileId', // use FileRepository.createFile to upload the file and get the id
        description: 'description',
        resolution: StreamResolutions.HD,
        metadata: { customField: 'customValue' },
      });
      
      liveObject.on('dataUpdated', (stream) => {
        console.log(stream);
      });
}

export async function deleteStream()
{
    try {
        await StreamRepository.deleteStream('streamId');
        console.log('Stream is deleted');
      } catch (error) {
        console.error('Can not delete the steam', error);
      }
}

export async function disposeStream()
{
    try {
        await StreamRepository.disposeStream('streamId');
        console.log('Stream is disposed');
      } catch (error) {
        console.error('Can not dispose the steam', error);
      }
}


