$(document).ready(function() {
  let postCounter = 1;

  // Add new post using .append()
  $("#addPost").click(function() {
    const newPost = $(`
      <div class="blog-post">
        <div class="post-title">New Blog Post ${postCounter}</div>
        <div class="post-content">This is a newly added blog post with interesting content about web development.</div>
      </div>
    `);
    
    $("#blogList").append(newPost);
    postCounter++;
  });

  // Prepend featured post using .prepend()
  $("#prependFeatured").click(function() {
    const featuredPost = $(`
      <div class="blog-post featured">
        <div class="post-title">Featured: Breaking News ${postCounter}</div>
        <div class="post-content">This is a featured post that appears at the top of the blog list.</div>
      </div>
    `);
    
    $("#blogList").prepend(featuredPost);
    postCounter++;
  });

  // Remove last post using .remove()
  $("#removeLast").click(function() {
    $("#blogList .blog-post:last").remove();
  });

  // Add tags to posts using .before() and .after()
  $("#addTags").click(function() {
    $(".blog-post").each(function() {
      if ($(this).find(".post-tags").length === 0) {
        const tagsContainer = $('<div class="post-tags"></div>');
        
        // Add tag before content
        const beforeTag = $('<span class="tag tag-before">New</span>');
        tagsContainer.append(beforeTag);
        
        // Add tag after content
        const afterTag = $('<span class="tag tag-after">Popular</span>');
        tagsContainer.append(afterTag);
        
        $(this).append(tagsContainer);
      }
    });
  });

  // Highlight posts with specific keywords
  $("#highlightKeyword").click(function() {
    const keyword = $("#keywordInput").val().toLowerCase().trim();
    
    if (keyword) {
      $(".blog-post").removeClass("highlight-keyword");
      
      $(".blog-post").each(function() {
        const title = $(this).find(".post-title").text().toLowerCase();
        const content = $(this).find(".post-content").text().toLowerCase();
        
        if (title.includes(keyword) || content.includes(keyword)) {
          $(this).addClass("highlight-keyword");
        }
      });
    }
  });
});
