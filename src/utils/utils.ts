import { FileRepository } from "@amityco/ts-sdk";

export function getTimeDiffString(postTime: number | string): string {
  // Convert the post time to a Date object
  var postDate = new Date(postTime);

  // Get the current time
  var nowDate = new Date();

  // Calculate the difference in milliseconds between the post time and the current time
  var diff = nowDate.getTime() - postDate.getTime();

  // Calculate the difference in seconds, minutes, hours, days, and weeks
  var seconds = Math.floor(diff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days / 7);

  // Return the appropriate time string based on the difference
  if (weeks > 0) {
    return weeks + " week" + (weeks == 1 ? "" : "s") + " ago";
  } else if (days > 0) {
    return days + " day" + (days == 1 ? "" : "s") + " ago";
  } else if (hours > 0) {
    return hours + " hour" + (hours == 1 ? "" : "s") + " ago";
  } else if (minutes > 0) {
    return minutes + " minute" + (minutes == 1 ? "" : "s") + " ago";
  } else {
    return seconds + " second" + (seconds == 1 ? "" : "s") + " ago";
  }
}

export function parseDateFromString(dateStr: string): Date {
  var date = new Date(dateStr);
  return date;
}

export async function getUrlFromFileId(fileID: string): Promise<string> {

  try {
    const file = await FileRepository.getFile(fileID);  
    return file.data.fileUrl ?? "";
  } catch (error) {
    console.error("Error while get file");
  }
  return "";

}
export const uriToBlob = async (uri: string): Promise<Blob> => {
  
  const response = await fetch(uri.replace("file:///","file:/"));
  console.log("Respond blob: "+JSON.stringify(response))
  const blob = await response.blob();

  return blob;
};

export const handleStringArrFromObject=(arr:string[] )=>{
  return arr.toString().split(',');
}



