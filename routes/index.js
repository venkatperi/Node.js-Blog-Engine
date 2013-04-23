/**
 * @module nodejs-blog-engine
 */

//var db = require( '../db' );
var moment = require( 'moment' );

function formatPostPreviews( posts ) {
  posts.forEach( function ( post ) {
    post.content = post.content.substr( 0, post.content.search( "</p>" ) );
    post.createdAt = moment( post.createdAt ).format( "MMMM Do, YYYY" );
  } );
  return posts;
}

exports.set = function ( options ) {

  exports.index = function ( req, res ) {
    var searchParameters = {status : ["published"]};

    if ( req.user ) {
      searchParameters.status.push( "draft" );
    }

    res.render( 'index', {posts : [] } );
//    db.Post.findAll( {order : 'createdAt DESC', where : searchParameters} ).success( function ( posts ) {
//      res.render( 'index', {posts : formatPostPreviews( posts ), noTitleLink : false} );
//    } );

  };

  exports.post = function ( req, res ) {
    var searchParameters = {title : req.params.title};
    if ( !req.user ) {
      searchParameters.status = 'published';
    } //guests cannot see blog entry drafts

    db.Post.find( {where : searchParameters} ).success( function ( post ) {
      if ( post ) {
        post.createdAt = moment( post.createdAt ).format( "MMMM Do, YYYY" );
        res.render( 'post', {post : post, noTitleLink : true} );
      }
      else {
        res.send( 404, 'Sorry, I can\'t find that entry!' );
      }
    } );
  };

  exports.newPost = function ( req, res ) {
    res.render( 'editPost', {post : {
      content : '',
      title : '',
      createdAt : moment().format( "MM/DD/YYYY" )
    }} );
  };

  exports.createPost = function ( req, res ) {
    db.Post.create( {title : req.query.title, content : req.query.content, status : req.query.status} ).success( function ( result ) {
      res.redirect( '/' );
    } );
  };

  exports.editPost = function ( req, res ) {
    db.Post.find( {where : {title : req.params.title}} ).success( function ( post ) {
      switch ( req.params.mode ) {
        case "edit":
          post.createdAt = moment( post.createdAt ).format( "MM/DD/YYYY" );
          res.render( 'editPost', {post : post} );
          break;
        case "confirm-deletion":
          res.render( 'confirmDeletePost', {post : post} );
          break;
        case "delete":
          post.destroy().success( function () {
            res.redirect( '/' );
          } );
          break;
      }
    } );
  };

  exports.updatePost = function ( req, res ) {
    db.Post.find( {where : {id : req.query.postId}} ).success( function ( post ) {
      post.title = req.query.title;
      post.content = req.query.content;
      post.createdAt = new Date( moment( req.query.createdAt, "MM/DD/YYYY" ).utc() );
      post.status = req.query.status;
      post.save();
      res.redirect( '/' );
    } );
  };

};