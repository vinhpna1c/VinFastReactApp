import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
    const [shared, setShared] = useState(false);
  
    const handleLike = () => {
      setLiked(!liked);
    };
  
    const handleComment = () => {
      setCommented(!commented);
    };
  
    const handleShare = () => {
      setShared(!shared);
    };
  
    return (
      <View>
        <View style={styles.header}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
          </View>
        </View>
        {/* {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )} */}
        <Text style={styles.content}>
            Hello
            </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleLike}>
            <MaterialIcons name={liked ? 'favorite' : 'favorite-border'} size={24} style={styles.actionIcon} />
          </TouchableOpacity>
          <Text style={styles.actionCount}>{post.likes}</Text>
          <TouchableOpacity onPress={handleComment} style={styles.action}>
            <MaterialIcons name={commented ? 'comment' : 'comment-border'} size={24} style={styles.actionIcon} />
          </TouchableOpacity>
          <Text style={styles.actionCount}>{post.comments.length}</Text>
          <TouchableOpacity onPress={handleShare} style={styles.action}>
            <MaterialIcons name={shared ? 'share' : 'share-border'} size={24} style={styles.actionIcon} />
          </TouchableOpacity>
          <Text style={styles.actionCount}>{post.shares}</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
        {commented && (
          <View style={styles.commentSection}>
            <Text>Comment section</Text>
          </View>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    headerText: {
      flexDirection: 'column',
    },
    username: {
      fontWeight: 'bold',
    },
    timestamp: {
      color: '#ccc',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginTop: 10,
      marginBottom: 10,
    },
    content: {
      marginTop: 10,
      marginBottom: 10,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    action: {
      marginLeft: 10,
    },
    actionIcon: {
      color: '#333',
    },
    actionCount: {
      marginLeft: 5,
      color: '#333',
    },  

    shareButton: {
        backgroundColor: '#3b5998',
        borderRadius: 5,
        padding: 5,
        marginLeft: 'auto',
      },
      shareButtonText: {
        color: '#fff',
      },
      commentSection: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 10,
      },
    });
export default Post;