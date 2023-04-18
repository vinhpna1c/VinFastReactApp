import {LinearProgress} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {useState,useEffect} from 'react';

function ReelProgress(props)
{   
    const {duration} =props;
    
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) =>{ 
            
    
            if(prevProgress<duration)
            {
                return( prevProgress + 1);
            }
            return( prevProgress );
        });
          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [progress]);
    return (
        <LinearProgress
        variant="determinate"
        color="blue"
        value={progress/duration}
        style={styles.progress}
      />
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progress: {
      width: '100%',
    },
  });

export default ReelProgress