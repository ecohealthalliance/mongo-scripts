//script to find posts for plant diseases
                                                                       //no records for 'brown stripe'
var diseases = /downy mildew|ralstonia solanacearum|red (leaf )?blotch|brown stripe|annual ryegrass toxicity|potato wart disease|xanthomonas leaf blight|green mottle mosaic virus/i
var data = db.posts.find({"subject.description": {$regex: diseases }}).toArray();
printjson(data)
print(data.length)