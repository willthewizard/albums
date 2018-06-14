import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
// functional component, only for displaying purposes
const AlbumDetail =({album})=>{
    const {title,artist,thumbnail_image,image,url} = album;
    return(
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Image
                     source={{uri:thumbnail_image}} 
                     style={styles.thumbnailStyle}/>
                </View>
                <View style={styles.headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image source={{uri:image}} style={styles.imageStyle} />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles ={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'cetner',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null 
    }

};
export default AlbumDetail