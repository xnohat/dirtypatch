var fs = require('fs'); 
//--------------------------------------- 
//Patch: Allow to CORS on nginx 
var file_need_patch = '/etc/nginx/nginx.conf'; 
if (fs.existsSync(file_need_patch)) { 
	console.log('Patching: ',file_need_patch); 
var find = `#set $csp_worker "worker-src 'none'";`; 
var replace = `set $csp_default "default-src * 'unsafe-inline' 'unsafe-eval'";   
    set $csp_script "script-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_style "style-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_object "object-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_base_uri "base-uri 'self'";  
    set $csp_connect "connect-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_font "font-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_frame "frame-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_img "img-src http: https: data: blob:";  
    set $csp_manifest "manifest-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_media "media-src * 'unsafe-inline' 'unsafe-eval'";  
    set $csp_worker "worker-src * 'unsafe-inline' 'unsafe-eval'";`; 
	var content_of_file = fs.readFileSync(file_need_patch).toString();  
	content_of_file = content_of_file.replace(/set\s\$csp_/g,'#set $csp_'); 
	content_of_file = content_of_file.replace(find,replace); 
	fs.writeFileSync(file_need_patch, content_of_file); 
} 
//--------------------------------------- 
//Patch: Allow to run Automations or some restrict endpoint in Dev Env 
var file_need_patch = '/app/dist/middleware/appInfo.js'; 
if (fs.existsSync(file_need_patch)) { 
	console.log('Patching: ',file_need_patch); 
var find = `ctx.throw(400, "Only apps in production support this endpoint");`; 
var replace = `//ctx.throw(400, "Only apps in production support this endpoint");`; 
	var content_of_file = fs.readFileSync(file_need_patch).toString();  
	content_of_file = content_of_file.replace(find,replace); 
	fs.writeFileSync(file_need_patch, content_of_file); 
} 
//--------------------------------------- 
//Patch: Cannot filter with column name have space 
var file_need_patch = '/app/dist/api/controllers/row/internalSearch.js'; 
if (fs.existsSync(file_need_patch)) { 
    console.log('Patching: ',file_need_patch); 
var find = `key = builder.preprocess(key.replace(/ /g, "_"), {`; 
var replace = `key = builder.preprocess(key.replace(/ /, "_"), {`; 
    var content_of_file = fs.readFileSync(file_need_patch).toString();  
    content_of_file = content_of_file.replace(find,replace); 
    fs.writeFileSync(file_need_patch, content_of_file); 
} 
//--------------------------------------- 
//Patch: Budibase export CSV not support UTF-8 
var file_need_patch = '/app/dist/utilities/fileSystem/index.js'; 
if (fs.existsSync(file_need_patch)) { 
	console.log('Patching: ',file_need_patch); 
var find = `exports.apiFileReturn = contents => {
    const path = join(budibaseTempDir(), uuid());
    fs.writeFileSync(path, contents);
    return fs.createReadStream(path);
};`; 
var replace = `exports.apiFileReturn = contents => { 
    const path = join(budibaseTempDir(), uuid()); 
    fs.writeFileSync(path, "\\ufeff" + contents); 
    let readerStream = fs.createReadStream(path); 
    readerStream.setEncoding("binary"); 
    return readerStream; 
};`; 
var content_of_file = fs.readFileSync(file_need_patch).toString();  
content_of_file = content_of_file.replace(find,replace); 
fs.writeFileSync(file_need_patch, content_of_file); 
}
