function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60uvn5rZAVI":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
lmsAPI.SetScore(player.GetVar("USER_SCORE"), 100, 0);
SCORM_CallLMSSetValue("cmi.core.lesson_status", "complete");
}

