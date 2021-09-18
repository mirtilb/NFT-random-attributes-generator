/**
 * Script
 *
 * @file random color variations artboard.jsx
 * @author gritsenko.yes@gmail.com
 * @version 1.0.1
 * @date 17 August 2021
 */

/*


*/


#target "Illustrator"

#script random color variations artboard
#script "random color variations artboard"

#strict on


var make_with_new_Colors = function () {
  if(typeof JSON!=="object"){JSON={}}(function(){var rx_one=/^[\],:{}\s]*$/;var rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rx_four=/(?:^|:|,)(?:\s*\[)+/g;var rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return(n<10)?"0"+n:n}function this_value(){return this.valueOf()}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?(this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"):null};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value}var gap;var indent;var meta;var rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i;var k;var v;var length;var mind=gap;var partial;var value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return(isFinite(value))?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?("[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]"):"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+((gap)?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+((gap)?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k;var v;var value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return("\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4))})}if(rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,""))){j=eval("("+text+")");return(typeof reviver==="function")?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());

  String.prototype.trim2 = function() { return this.replace(/^\s+|\s+$/g, ''); };
  String.prototype.slashed = function() { return (this.charAt(this.length - 1) == '/' || this.charAt(this.length - 1) == '\\') ? this : this + '/'; };
  function indexOf(arr, obj) {
    var i, j;
    for (i = -1, j = arr.length; ++i < j; ) {
        if (arr[i] == obj) { return i; }
    }
    return -1;
  }


  /**
   * read dat file
   * @param   {File} fcsv
   * @returns {Object|Boolean}
   */
  function readdat(fcsv, delim) {
    var res = {};
    var fop;
    try {
      //fcsv.encoding = 'UTF-8';
      fop = fcsv.open("r:");
      var sss;
      sss = fcsv.readln();
      if (sss.trim2() !== '') {
        res.head = csvToArray(sss, delim);
      }
      res.dat = [];
      var line = 0;
      for (; !fcsv.eof; ) {
        sss = fcsv.readln();
        if (sss.trim2() !== '') {
          res.dat[line] = csvToArray(sss, delim);
          line++;
        }
      }
    }
    catch (ex) {
     alert(ex);
    }
    finally {
      if (fop) fcsv.close();
    }
    return res;
  }

  function csvToArray(text, delim) {
    var ret = [''], i = 0, p = '', s = true;
    for (var n = 0, l; n < text.length; n++) {
        l = text.charAt(n);
        if ('"' === l) {
            s = !s;
            if ('"' === p) {
                ret[i] += '"';
                l = '-';
            } else if ('' === p)
                l = '-';
        } else if (s && delim === l)
            l = ret[++i] = '';
        else
            ret[i] += l;
        p = l;
    }
    return ret;
  }

  /**
   * Logger
   */
  function LOGI(str, f_log, rr) {
      if (f_log !== undefined) {
          this.f_log = f_log;
          this.ff = new File(this.f_log);
          if (rr === undefined && this.ff.exists) {
              this.ff.remove();
          }
      }

      this.WRITE = function (str) {
          try {
              var da = new Date();
              this.ff.open("a:");
              var time = da.toLocaleString();
              this.ff.writeln(time + " - " + str);
              this.ff.close();
          }
          catch(e) {
              throw e;
          }
      };

      this.WRITE2 = function (str) {
          try {
              this.ff.open("a:");
              this.ff.writeln(str);
              this.ff.close();
          }
          catch(e) {
              throw e;
          }
      };

      if (str !== undefined) {
          this.WRITE(str);
      }
  }


  /**
     { c: 1 } to { c: 2 }
     { m: 70, c: 1, c_: 2} to { m: 20, c: 3, c_: 4 }
   */
  function changeColorWithGradient(el, ccc, ccc2, tolerance) {
    try {
      var vv;
      var color1, color1_;

      if (el.filled) {
        vv = "fillColor";
        color1 = el[vv];
        if (color1.typename === 'GradientColor') {
          if (ccc.m === undefined) return false;
          if (Math.abs(ccc.m - color1.gradient.gradientStops[0].midPoint) > tolerance) return false;
          color1_ = color1.gradient.gradientStops[1].color;
          color1 = color1.gradient.gradientStops[0].color;
          if (color1.typename === 'SpotColor') {
            color1 = color1.spot.color;
          }
          if (color1_.typename === 'SpotColor') {
            color1_ = color1_.spot.color;
          }
          if (color1.typename === 'CMYKColor' && color1_.typename === 'CMYKColor') {
            if ( Math.abs(color1.black - ccc.c.black) <= tolerance
                 && Math.abs(color1.magenta - ccc.c.magenta) <= tolerance
                 && Math.abs(color1.cyan - ccc.c.cyan) <= tolerance
                 && Math.abs(color1.yellow - ccc.c.yellow) <= tolerance
                 && Math.abs(color1_.black - ccc.c_.black) <= tolerance
                 && Math.abs(color1_.magenta - ccc.c_.magenta) <= tolerance
                 && Math.abs(color1_.cyan - ccc.c_.cyan) <= tolerance
                 && Math.abs(color1_.yellow - ccc.c_.yellow) <= tolerance) {
              var gr = app.activeDocument.gradients.add();
              gr.type = el[vv].gradient.type;
              //gr.gradientStops = el[vv].gradient.gradientStops;
              gr.gradientStops[0].opacity = el[vv].gradient.gradientStops[0].opacity;
              gr.gradientStops[0].rampPoint = el[vv].gradient.gradientStops[0].rampPoint;
              gr.gradientStops[0].midPoint = ccc2.m;
              gr.gradientStops[0].color = ccc2.c;
              gr.gradientStops[1].color = ccc2.c_;
              el[vv].gradient = gr;
            }
          }
        }
        else {
          if (ccc.m !== undefined) return false;
          if (color1.typename === 'SpotColor') {
            color1 = color1.spot.color;
          }
          if (color1.typename === 'CMYKColor') {
            if ( Math.abs(color1.black - ccc.c.black) <= tolerance
                 && Math.abs(color1.magenta - ccc.c.magenta) <= tolerance
                 && Math.abs(color1.cyan - ccc.c.cyan) <= tolerance
                 && Math.abs(color1.yellow - ccc.c.yellow) <= tolerance) {
              el[vv] = ccc2.c;
            }
          }
        }
      }// if filled

      if (el.stroked) {
        vv = "strokeColor";
        color1 = el[vv];
        if (color1.typename === 'GradientColor') {
          if (ccc.m === undefined) return false;
          if (Math.abs(ccc.m - color1.gradient.gradientStops[0].midPoint) > tolerance) return false;
          color1_ = color1.gradient.gradientStops[1].color;
          color1 = color1.gradient.gradientStops[0].color;
          if (color1.typename === 'SpotColor') {
            color1 = color1.spot.color;
          }
          if (color1_.typename === 'SpotColor') {
            color1_ = color1_.spot.color;
          }
          if (color1.typename === 'CMYKColor' && color1_.typename === 'CMYKColor') {
            if ( Math.abs(color1.black - ccc.c.black) <= tolerance
                 && Math.abs(color1.magenta - ccc.c.magenta) <= tolerance
                 && Math.abs(color1.cyan - ccc.c.cyan) <= tolerance
                 && Math.abs(color1.yellow - ccc.c.yellow) <= tolerance
                 && Math.abs(color1_.black - ccc.c_.black) <= tolerance
                 && Math.abs(color1_.magenta - ccc.c_.magenta) <= tolerance
                 && Math.abs(color1_.cyan - ccc.c_.cyan) <= tolerance
                 && Math.abs(color1_.yellow - ccc.c_.yellow) <= tolerance) {
              var gr = app.activeDocument.gradients.add();
              gr.type = el[vv].gradient.type;
              //gr.gradientStops = el[vv].gradient.gradientStops;
              gr.gradientStops[0].opacity = el[vv].gradient.gradientStops[0].opacity;
              gr.gradientStops[0].rampPoint = el[vv].gradient.gradientStops[0].rampPoint;
              gr.gradientStops[0].midPoint = ccc2.m;
              gr.gradientStops[0].color = ccc2.c;
              gr.gradientStops[1].color = ccc2.c_;
              el[vv].gradient = gr;
            }
          }
        }
        else {
          if (ccc.m !== undefined) return false;
          if (color1.typename === 'SpotColor') {
            color1 = color1.spot.color;
          }
          if (color1.typename === 'CMYKColor') {
            if ( Math.abs(color1.black - ccc.c.black) <= tolerance
                 && Math.abs(color1.magenta - ccc.c.magenta) <= tolerance
                 && Math.abs(color1.cyan - ccc.c.cyan) <= tolerance
                 && Math.abs(color1.yellow - ccc.c.yellow) <= tolerance) {
              el[vv] = ccc2.c;
            }
          }
        }
      }// if stroked

    }
    catch (ex) {
      //alert(ex + ' - ' + ex.line);
      return false;
    }
  }


  function changeColorWithGradientA(el, accc, accc2) {
    var num;
    for (num = accc.length - 1; num > -1; num--) {
      if (accc2[num] !== null) {
        changeColorWithGradient(el, accc[num], accc2[num], 0.3); //0.0001);
      }
    }
  }


  /**
   *
   */
  function changeColor2A(el, accc, accc2) {
    var num;
    switch(el.typename) {
      case "PathItem":
        changeColorWithGradientA(el, accc, accc2);
        break;
      case "CompoundPathItem":
        for (num = el.pathItems.length - 1; num > -1; num--) {
          changeColorWithGradientA(el.pathItems[num], accc, accc2);
        }
        break;
      case "GroupItem":
        for (num = el.pageItems.length - 1; num > -1; num--) {
          changeColor2A(el.pageItems[num], accc, accc2);
        }
        break;
      default:
        break;
    }
  }


  //#FEFEFE
  function readColor(s1) {
    var newRGBColor = new RGBColor();
    newRGBColor.red = parseInt(s1.substring(1, 3), 16);
    newRGBColor.green = parseInt(s1.substring(3, 5), 16);
    newRGBColor.blue = parseInt(s1.substring(5, 7), 16);
    return newRGBColor;
  }


  function findElemenstWithColors(el, findcolor2_, findcolor3_) {
    var num;
    switch(el.typename) {
      case "PathItem":
	    if (el.filled) {
	      if (cmpColors(el.fillColor, findcolor2_)) {
		    aels2.push(el);
		  }
		  else if (cmpColors(el.fillColor, findcolor3_)) {
		    aels3.push(el);
		  }
		}
	    if (el.stroked) {
	      if (cmpColors(el.strokeColor, findcolor2_)) {
		    aels2_.push(el);
		  }
		  else if (cmpColors(el.strokeColor, findcolor3_)) {
		    aels3_.push(el);
		  }
		}
        break;
      case "CompoundPathItem":
        for (num = el.pathItems.length - 1; num > -1; num--) {
          findElemenstWithColors(el.pathItems[num], findcolor2_, findcolor3_);
        }
        break;
      case "GroupItem":
        for (num = el.pageItems.length - 1; num > -1; num--) {
          findElemenstWithColors(el.pageItems[num], findcolor2_, findcolor3_);
        }
        break;
      default:
        break;
    }
  }

  function collectElements(el) {
    var num;
    switch(el.typename) {
      case "PathItem":
	    if (el.filled) {
		  aels1.push(el);
		}
        break;
      case "CompoundPathItem":
        for (num = el.pathItems.length - 1; num > -1; num--) {
          collectElements(el.pathItems[num]);
        }
        break;
      case "GroupItem":
        for (num = el.pageItems.length - 1; num > -1; num--) {
          collectElements(el.pageItems[num]);
        }
        break;
      default:
        break;
    }
  }


  function cmpColors(color1, color2, tolerance) {
    if (tolerance === undefined) {
      tolerance = 0.1;
    }
    if (color1.typename != color2.typename) {
      return false;
    }
    switch (color1.typename) {
      case 'CMYKColor':
        return Math.abs(color1.black - color2.black) <= tolerance
               && Math.abs(color1.magenta - color2.magenta) <= tolerance
               && Math.abs(color1.cyan - color2.cyan) <= tolerance
               && Math.abs(color1.yellow - color2.yellow) <= tolerance;
      case 'GrayColor':
        return Math.abs(color1.gray - color2.gray) <= tolerance;
      case 'LabColor':
        return Math.abs(color1.a - color2.a)<= tolerance && Math.abs(color1.b - color2.b)<= tolerance && Math.abs(color1.l - color2.l)<= tolerance;
      case 'NoColor':
        return true;
      case 'PatternColor':
        return false;
      case 'RGBColor':
        return Math.abs(color1.red - color2.red) <= tolerance && Math.abs(color1.blue - color2.blue) <= tolerance && Math.abs(color1.green - color2.green)<= tolerance;
      case 'SpotColor':
        if (color1.tint != color2.tint) return false;
        if (color1.colorType != color2.colorType) return false;
        if (color1.spotKind != color2.spotKind) return false;
        if (!(cmpColors(color1.spot.color, color2.spot.color, tolerance))) return false;
        return true;
      default:
        return false;
    }
  }


  /**
   * read dats
   */
  function readDats(fcc, dats) {
    try {
        if (fcc.exists) {
            fcc.open("r:");
			var dats0 = JSON.parse(fcc.read());
            if (dats === undefined) {
              return dats0;
            }
            else {
              var key;
              for (key in dats) {
                if (dats0[key] !== undefined) {
                  dats[key] = dats0[key];
                }
              }
            }
        }
    }
    catch(e) {
    }
    finally {
        if (fcc !== null) fcc.close();
    }
  }

  /**
   * save dats
   */
  function saveDats(fcc, dats, m) {
    try {
        fcc.open("w:");
        if (m === undefined) {
          fcc.write(dats = JSON.stringify(dats, undefined, 2));
        }
        else {
          fcc.write(dats = JSON.stringify(dats));
        }
    }
    catch(e) {
    }
    finally {
        if (fcc !== null) fcc.close();
    }
  }


  /**
   * dialog
   */
  function dlg_input(dats, title) {
    try {

      var offbase = psource;
      var num;

      var w1 = new Window ("dialog",
             title,
             undefined, { maximizeButton: false, minimizeButton: false });
      w1.orientation = "column";

      var tab1 = w1;

      w1.grpmp = tab1.add("group");
      w1.grpmp.orientation = "row";
      w1.grpmp.alignment = ["fill", "top"];
      w1.option0 = w1.grpmp.add("checkbox", undefined, "all artboards", "alignment:left");
      w1.option0.value = dats.option0;
      w1.option0.onClick = function() {
          if (w1.option0.value) {
            w1.grpmA.enabled = false;
            w1.grpmB.enabled = true;
          }
          else {
            w1.grpmA.enabled = true;
            w1.grpmB.enabled = false;
          }
        };

      w1.grpmB = tab1.add("group");
      w1.grpmB.orientation = "row";
      w1.grpmB.alignment = ["fill", "top"];
      w1.grpmB.add("statictext", undefined, 'variant/artboard (max): ', "alignment:left");
      w1.abmax = w1.grpmB.add("edittext", undefined, dats.abmax);
      w1.abmax.minimumSize.width = 60;
      w1.abmax.text = dats.abmax;

      w1.grpmA = tab1.add("group");
      w1.grpmA.orientation = "row";
      w1.grpmA.alignment = ["fill", "top"];
      w1.grpmA.add("statictext", undefined, 'Artboard: ', "alignment:left");
      w1.artboard = w1.grpmA.add("edittext", undefined, dats.artboard);
      w1.artboard.minimumSize.width = 60;
      w1.artboard.text = dats.artboard;

      w1.grpm0 = tab1.add("group");
      w1.grpm0.orientation = "row";
      w1.grpm0.alignment = ["fill", "top"];
      w1.grpm0.add("statictext", undefined, 'number of variations: ', "alignment:left");
      w1.number = w1.grpm0.add("edittext", undefined, dats.number);
      w1.number.minimumSize.width = 60;
      w1.number.text = dats.number;

//      w1.g = tab1.add("group");
//      w1.g.orientation = "row";
//      w1.g.alignment = ["fill", "top"];
//      w1.g.add("statictext", undefined, "CSV log: ", "alignment:left");
//      w1.pathTs = w1.g.add("edittext", undefined, "??????????", { readonly: false });
//      w1.pathTs.minimumSize.width = w1.pathTs.maximumSize.width = 480;
//      w1.pathTs.text = dats.fcsv;
//      w1.btnTs = w1.g.add("button", undefined, "...");
//      w1.btnTs.onClick = function() {
//          var fileMatch = (File.fs === "Macintosh") ? function(f){ return (f instanceof File && f.displayName.match(/(\.csv$)/i)); } : 'Files: *.csv';
//          var off = File.openDialog("Open CSV log file:", fileMatch);
//          if (off === null) {
//            return;
//          }
//          else {
//            offbase = off.parent;
//            w1.pathTs.text = decodeURI(off.fsName);
//          }
//        };
//      w1.btnTs.maximumSize.width = 60;
//      w1.btnTs.alignment = ["right", "fill"];

      w1.g = tab1.add("group");
      w1.g.orientation = "row";
      w1.g.alignment = ["fill", "top"];
      w1.g.alignChildren = ["left", "fill"];
      w1.g.add("statictext", undefined, "OUTPUT folder: ", "alignment:left");
      w1.path1 = w1.g.add("edittext", undefined, "??????????", { readonly: false });
      w1.path1.minimumSize.width = w1.path1.maximumSize.width = 410;
      w1.path1.text = dats.outputFolder;
      w1.btn1 = w1.g.add("button", undefined, "...");
      w1.btn1.onClick = function() {
          var ex = new Folder(w1.path1.text);
          if (!ex.exists) ex = offbase;
          var off = Folder.selectDialog("Please choose OUTPUT folder", ex);
          if (off === null) {
            return;
          }
          else {
            offbase = off.parent;
            w1.path1.text = decodeURI(off.fsName);
          }
        };
      w1.btn1.maximumSize.width = 60;
      w1.btn1.alignment = ["right", "fill"];


      w1.grp4 = w1.add("group");
      w1.grp4.orientation = "row";
      w1.grp4.alignment = ["right", ""];
      var btnOk = w1.grp4.add("button", undefined, "OK",  { name:"ok" });
      btnOk.minimumSize.width = 160;
      var btnCa = w1.grp4.add("button", undefined, "Cancel", { name:"cancel" });

      btnOk.onClick = function() {
        w1.close(1);
      };

      if (dats.option0) {
        w1.grpmA.enabled = false;
        w1.grpmB.enabled = true;
      }
      else {
        w1.grpmA.enabled = true;
        w1.grpmB.enabled = false;
      }

      var dret = w1.show();

      if (dret == 1) {

        return {
            "option0": w1.option0.value,
            "abmax":   w1.abmax.text,
            "artboard" : w1.artboard.text,
            "number" : w1.number.text,
            "outputFolder" : w1.path1.text
            //"fcsv" : w1.pathTs.text
          };
      }
      else {
          return null;
      }
    }
    catch (e) {
      alert(e.message + "\n" + e.line);
    }
  }



  var g_title = "random color variations artboard";

  var psource = File($.fileName).path;

  var docRef = app.activeDocument;
  if (app.documents.length === 0) {
    alert("Please open a source document and try again.");
    return;
  }


  var exportOptions2 = new ExportOptionsPNG24();
  exportOptions2.artBoardClipping = true;
  exportOptions2.antiAliasing = false;
  exportOptions2.transparency = false;
  exportOptions2.saveAsHTML = false;
  exportOptions2.matte = false;
  exportOptions2.horizontalScale = 100;
  exportOptions2.verticalScale = 100;

  // svg options
  var exoptSvg = new ExportOptionsSVG();
  //exoptSvg.DTD = SVGDTDVersion.SVGTINY1_1;
  //exoptSvg.embedRasterImages = true;
  exoptSvg.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
  exoptSvg.embedRasterImages = false;
  exoptSvg.fontType = SVGFontType.OUTLINEFONT;
  //exoptSvg.artBoardClipping = true;
  exoptSvg.saveMultipleArtboards = true;


  var wFld = new Folder(Folder.userData + "/script");
  var fileprefs = new File(wFld + '/random color variations artboard.prefs');
  var dats = {
      "option0": false,
      "abmax":   30,
      "artboard" : 12,
      "number": 3,
      "outputFolder": decodeURI(Folder.desktop.fsName),
      "fcsv" : decodeURI(Folder.desktop.fsName + "/with colors log.csv")

    };

  if (wFld.exists) {
    if (fileprefs.exists) readDats(fileprefs, dats);
  }
  else {
    wFld.create();
  }

  var dats = dlg_input(dats, g_title);
  if (!dats) return;

  saveDats(fileprefs, dats);

  dats.artboard = Number(dats.artboard);
  dats.abmax = Number(dats.abmax);
  dats.number = Number(dats.number);
  dats.outputFolder = new Folder(dats.outputFolder);
  //dats.fcsv = new File(dats.fcsv);
  //if (dats.number < 1) dats.number = 1;

  if (dats.option0) {
    dats.artboard = Math.round(Math.random() * docRef.artboards.length);
  }

  // set

//  dats.fcsv = new File(dats.fcsv);
//  if (!dats.fcsv.exists) {
//    return;
//  }

//  var dd = readdat(dats.fcsv, ',');

  try {
    var docname = decodeURI(docRef.name.substr(0, docRef.name.lastIndexOf('.')));



    // colors table
    var colors_table_main;
    colors_table_main = [
      ["#d4af37", "#dbe4eb"],
      ["#000000", "#ffffff"],
      ["#fdee21", "#fe0000", "#0000fe"],
      ["#1B7340", "#91c538", "#A0DAA9", "#0072B5", "#18425e",
       "#9BB7D4", "#581845", "#926AA6", "#D2386C", "#e97cb0",
       "#900c3f", "#ff5733", "#f4c036", "#E9897E", "#FDAC53"]
    ];

//todo: colorsdats = [];
// readDats(fcc, colorsdats);
// //saveDats(fileprefs, colors_table_main);

    // generate all combinations

    colors_table_1 = [].concat(colors_table_main[0], colors_table_main[1], colors_table_main[2], colors_table_main[3]);

    colors_comb_by_group = [];

    c1 = 0;

    for (num = 0; num < 4; num++) {
      count = colors_table_main[num].length;

      ccomb = [];
      var len2;
      len2 = colors_table_1.length;   // 22
      len3 = len2 - 1;                // 21

      for (cc = 0; cc < count; cc++) {
        for (c2 = 0; c2 < len2; c2++) {
          if (c2 == c1) continue;
          for (c3 = 0; c3 < len3; c3++) {
            if (c3 == c1) continue;
            ccomb.push([c1, c2, c3]);
          }//for
        }//for
        ++c1;
      }//for
      colors_comb_by_group.push(ccomb);
    }// for


    // for white color
    // by percentage
    var nums; //1, num2, num3, num4;
    nums = new Array(4);
    nums[0] = Math.round(1 * dats.number / 100);
    nums[1] = Math.round(4 * dats.number / 100);
    nums[2] = Math.round(20 * dats.number / 100);
    nums[3] = dats.number - nums[0] - nums[1] - nums[2];

    var LOG = new LOGI("Start", new File(Folder.temp.fsName + '/random color variations artboard.err'));
    LOG.WRITE2(File($.fileName).name);
    LOG.WRITE2('output: ' + dats.outputFolder.fullName);
    LOG.WRITE2('');
    LOG.WRITE2('by percentage: ' + nums[0] + ', ' + nums[1] + ', ' + nums[2] + ', ' + nums[3] );


    var colors;
    colors = [];
    var color1, color2, color3;

    var findcolor2_, findcolor3_;
    if (docRef.documentColorSpace == DocumentColorSpace.CMYK) {
      findcolor2_ = new CMYKColor();
      findcolor2_.cyan = 0;
      findcolor2_.magenta = 0;
      findcolor2_.yellow = 0;
      findcolor2_.black = 100;
      findcolor3_ = new CMYKColor();
      findcolor3_.cyan = 0;
      findcolor3_.magenta = 0;
      findcolor3_.yellow = 0;
      findcolor3_.black = 0;
    }
    else {
      findcolor2_ = new RGBColor();
      findcolor2_.red = 0;
      findcolor2_.green = 0;
      findcolor2_.blue = 0;
      findcolor3_ = new RGBColor();
      findcolor3_.red = 255;
      findcolor3_.green = 255;
      findcolor3_.blue = 255;
    }

    var ll_rect = docRef.layers.add();
    ll_rect.move( docRef, ElementPlacement.PLACEATEND );



    // create target file
    // with a list of all PNG files


    dats.abmin = Math.ceil(dats.number / docRef.artboards.length);
    if (dats.abmin > dats.abmax) {
      alert('variant/artboard (max)\r' + 'too little for the total');
      //return;
    }

    var LOG22 = new LOGI(undefined, new File(dats.outputFolder.fsName + '/with colors log.csv'), false);

    // target combinations

    var targetcomb;
    targetcomb = [];

    var abbs, abb, abb_prev;
    abbs = [];
    for (ii = docRef.artboards.length - 1; ii > -1; ii--) abbs.unshift(ii);

    var onabblen;

    if (dats.option0) {
      onabblen = dats.abmin + Math.floor(Math.random() * (dats.abmax - dats.abmin));
      abb = abbs.splice(Math.floor(Math.random() * abbs.length), 1)[0];  // pick
    }
    else {
      abb = dats.artboard;
    }

    var numfile;
    var numfiles;
    numfiles = [];
    for (ii = dats.number; ii > 0; ii--) numfiles.push(ii);



    var fffff;
    fffff = true;

    var ftarget;
    ftarget = new File(dats.outputFolder + '/target.json');
    if (ftarget.exists) {
      alert('file "target.json" found in output folder \r' + 'creation will continue');

      targetcomb = readDats(ftarget);

      //else {
      //  ftarget.remove();
      //}
    }
    else {
      LOG22.WRITE2('FILE NAME, NAME, ARTBOARD Name, COLOR NB, COLOR 1, COLOR 2, COLOR 3');

      colors_comb_by_group = [].concat(colors_comb_by_group[0], colors_comb_by_group[1], colors_comb_by_group[2], colors_comb_by_group[3]);
      //ccomb = [].concat(colors_comb_by_group);
      ccomb = [];
      var comb;

      for (num = nums[0] + nums[1] + nums[2] + nums[3] - 1; num > -1; num--) {
        //count = nums[num];
        //for (ccc = 0; ccc < count; ccc++) {
          if (ccomb.length < 1) {
            ccomb = [].concat(colors_comb_by_group);
          }
          comb = ccomb.splice(Math.floor(Math.random() * ccomb.length), 1)[0];
          numfile = numfiles.splice(Math.floor(Math.random() * numfiles.length), 1)[0];

          targetcomb.push({ a: abb, n: numfile, comb: comb });

          if (dats.option0) {
            --onabblen;
            if (onabblen < 1) {
              onabblen = dats.abmin + Math.floor(Math.random() * (dats.abmax - dats.abmin));
              abb = abbs.splice(Math.floor(Math.random() * abbs.length), 1)[0];  // pick
            }
          }
        //}// for
      }// for

      saveDats(ftarget, targetcomb, true);

    }// else if ftarget.exists



    // creation
    // on targetcomb

    var destFile, destFile2;
    var aels1, aels2, aels3, aels2_, aels3_;

    abb_prev = -1;

    len = targetcomb.length;

    for (num = 0; num < len; num++) {
      nname = '' + docname + '-' + targetcomb[num].n;
      destFile = new File(dats.outputFolder + "/" + nname + ".png");
      if (fffff && destFile.exists) continue;


      docRef.artboards.setActiveArtboardIndex( targetcomb[num].a );
      abb = docRef.artboards[targetcomb[num].a];
      artboardName = abb.name;
      //exoptSvg.artboardRange = '' + dats.artboard;
      exoptSvg.artboardRange = '' + (targetcomb[num].a + 1);

      // find elements

      if (abb !== abb_prev) {
        abb_prev = abb;

        // rect

        var top = abb.artboardRect[1];
        var left = abb.artboardRect[0];
        var width = abb.artboardRect[2] - abb.artboardRect[0];
        var height = abb.artboardRect[1] - abb.artboardRect[3];
        var rect = ll_rect.pathItems.rectangle(top, left, width, height);
        rect.fillColor = findcolor3_;
        rect.strokeColor = new NoColor();
        //rect.zOrder(ZOrderMethod.SENDBACKWARD);

        //rect.remove();

        aels1  = [];
        aels2  = [];
        aels3  = [];
        aels2_ = [];
        aels3_ = [];
        docRef.selectObjectsOnActiveArtboard();
        for (var j = 0; j < app.selection.length; j++) {
       	  ln = '' + app.selection[j].layer.name;
          if (ln.toLowerCase() == 'accessories') {
            collectElements(app.selection[j]); // aels1
      	}
      	else {
      	  findElemenstWithColors(app.selection[j], findcolor2_, findcolor3_);//, aels2, aels3, aels2_, aels3_);
      	}
        }// for
        app.executeMenuCommand('deselectall');
      }

      // generate the variations

      LOG.WRITE2('  variations: ');

      comb = targetcomb[num].comb;

      color1str = colors_table_1[comb[0]];
      color1 = readColor(color1str);
      color2str = colors_table_1[comb[1]];
      color2 = readColor(color2str);
      color3str = colors_table_1[comb[2]];
      color3 = readColor(color3str);

  	  for (var j = 0; j < aels1.length; j++) {
        aels1[j].fillColor = color3;
      }
  	  for (var j = 0; j < aels2.length; j++) {
        aels2[j].fillColor = color2;
      }
  	  for (var j = 0; j < aels3.length; j++) {
        aels3[j].fillColor = color1;
      }
  	  for (var j = 0; j < aels2_.length; j++) {
        aels2_[j].strokeColor = color2;
      }
   	  for (var j = 0; j < aels3_.length; j++) {
        aels3_[j].strokeColor = color1;
      }


      destFile = new File(dats.outputFolder + "/" + nname + '.png');
      destFile2 = new File(dats.outputFolder + "/" + 'tmp-save-data2png' + '.png');
      try { destFile.remove(); } catch (_) { }
      try { destFile2.remove(); } catch (_) { }
      docRef.exportFile(destFile2, ExportType.PNG24, exportOptions2);
      destFile2 = new File(dats.outputFolder + "/" + 'tmp-save-data2png' + '.png');
      try { destFile2.rename(nname + '.png'); } catch (_) { }

      destFile = new File(dats.outputFolder + "/" + nname + ".svg");
      destFile2 = new File(dats.outputFolder + "/" + nname + '_' + artboardName + ".svg");
      try { destFile.remove(); } catch (_) { }
      try { destFile2.remove(); } catch (_) { }
      docRef.exportFile(destFile, ExportType.SVG, exoptSvg);
      destFile2 = new File(dats.outputFolder + "/" + nname + '_' + artboardName + ".svg");
      try { destFile2.rename(nname + ".svg"); } catch (_) { }
      //try { destFile2.remove(); } catch (_) { }


      LOG.WRITE2('  >>> ' + targetcomb[num].n + ' ' + color1str + ' - ' + color2str + ' - ' + color3str + ' ' );

                                                              // white, black, accessories
      //LOG22.WRITE2('FILE NAME, NAME, ARTBOARD Name, COLOR NB, COLOR 1, COLOR 2, COLOR 3');
      var n23, n3;
      n23 = (color2str == color3str ? '2' : '3');
      n3 = (n23 == 3 ? color3str : 'null');
      LOG22.WRITE2(nname + ".png, #" + targetcomb[num].n.toString(16) + ', "' + artboardName + '", ' + n23 + ', '
            + color1str + ', ' + color2str + ', ' + n3);

    }// for
  }
  catch (ex) {
    alert(ex + '\n' + ex.line);
  }

  app.activeDocument = docRef;
  app.executeMenuCommand('deselectall');

  alert('Done!', g_title);

}();
