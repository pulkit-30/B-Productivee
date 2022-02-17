board- object
  tasklist - Array
  |
  |
  |
    task - object
    |
    |
      cards - array
      |
      |

data class Board (
  val name : String = "",
  val image : String="",
  val createdBy : String="",
  val assignedTo : ArrayList<String> = ArrayList(),
  var documentId : String = "",
  //creating the task list once we have created the data class of Task
  var taskList: ArrayList<Task> = ArrayList()
)

TASK MODEL : (basically lists vali jgh)

data class Task(
    var title: String = "",
    val createdBy: String = "",
    var cards : ArrayList<Card> = ArrayList()
)
data class Card(
    val name : String = "",
    val createdBy : String = "",
    val assignedTo : ArrayList<String> = ArrayList(),
    val labelColor : String = ""
)