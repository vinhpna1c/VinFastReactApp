import { UserRepository } from "@amityco/ts-sdk";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getTimeDiffString } from "../../../../utils/utils";
import { Avatar } from "react-native-elements";

type CommentProps = {
    comment: Amity.Comment,
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        marginHorizontal:8,

    },
    contentSection: {
        backgroundColor: '#f0f1f4',
        borderRadius: 16,
        padding: 8,
        flexDirection: 'row',
    },
    userTitle:{
        fontWeight:'600',
        fontSize:14,
    },
    commentContent:{
        fontWeight:'400',
        fontSize:13,
        color:'black',
    },
    timeDiff:{
        marginLeft:8,
        fontWeight:'400',
        fontSize:12,
        color:'grey'

    }
}
)


function CommentComponent(props: CommentProps): JSX.Element {
    const { comment } = props;
    const AVATAR_SIZE=30;
    
    const [commentUser, setCommentUser] = useState<Amity.User | undefined>(undefined);
    useEffect(() => {
        const userID = comment.userId;
       UserRepository.getUserByIds([userID]).then((users) => {
            setCommentUser(users.data[0]);
        })
    }, [])
    //handle for text data
    const commmentData = comment.data as Amity.ContentDataText;
    return (
        <View style={styles.container}>
            <View style={styles.contentSection}>
                {commentUser != undefined ?
                    (commentUser.avatarCustomUrl == null ? (<Avatar rounded title={commentUser.displayName![0]} size={AVATAR_SIZE}  />)
                        : (<Avatar rounded source={{uri: commentUser.avatarCustomUrl}} size={AVATAR_SIZE} titleStyle={{ color: 'white' }} />))
                    : (<Avatar rounded  size={AVATAR_SIZE} titleStyle={{ color: 'white' }} />)}
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.userTitle}>{commentUser != undefined && commentUser.displayName}</Text>
                    <Text style={styles.commentContent}>{commmentData.text}</Text>
                </View>

            </View>
            <Text style={styles.timeDiff} >{getTimeDiffString(comment.editedAt)}</Text>


        </View>
    )
}

export default CommentComponent;