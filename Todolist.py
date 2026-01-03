import sys
import json
from PyQt5 import QtWidgets
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QVBoxLayout, QDialog, QLabel, QTextEdit, QWidget
from PyQt5.QtGui import QPalette, QColor, QIcon

CREDITS_MESSAGE = (
    "Developers:\n"
    "Brian Anelof Reyes Camposanto & Ethan Edgar Francisco\n"
    "from Subject: PROGCON CS241/SF242\n"
    "\n"
    "Special Thanks to Nescafe 3 in 1 for keeping Brian awake on doing this code overnight."
)

HELP_MESSAGE = (
    "Welcome to TDL or also known as the To-Do List\n"
    "This application will help you make desired tasks\n"
    "and keep track of them.\n"
    "\n"
    "To start using the application, click on the 'Start To-Do List'\n"
    "button on the main menu.\n"
    "\n"
    "Once you start using the application, you can add, delete, mark\n"
    "and set the priority of the task you've stated down.\n"
    "\n"
    "For more info, contact brcamposanto@student.apc.edu.ph\n"
)

TASKS_FILE = 'tasks.json'
DEFAULT_GEOMETRY = (150, 150, 400, 200)


def load_tasks():
    try:
        with open(TASKS_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def save_tasks(tasks):
    with open(TASKS_FILE, 'w') as file:
        json.dump(tasks, file)


def create_palette(is_dark_mode):
    palette = QPalette()
    if is_dark_mode:
        palette.setColor(QPalette.Window, QColor(53, 53, 53))
        palette.setColor(QPalette.WindowText, QColor(255, 255, 255))
        palette.setColor(QPalette.Base, QColor(42, 42, 42))
        palette.setColor(QPalette.Button, QColor(53, 53, 53))
        palette.setColor(QPalette.ButtonText, QColor(255, 255, 255))
    else:
        palette.setColor(QPalette.Window, QColor(255, 255, 255))
        palette.setColor(QPalette.WindowText, QColor(0, 0, 0))
        palette.setColor(QPalette.Base, QColor(240, 240, 240))
        palette.setColor(QPalette.Button, QColor(240, 240, 240))
        palette.setColor(QPalette.ButtonText, QColor(0, 0, 0))
    return palette


class ThemedDialog(QDialog):
    def __init__(self, title, message, dark_mode, parent=None):
        super().__init__(parent)
        self.dark_mode = dark_mode
        self.setWindowTitle(title)
        self.setGeometry(*DEFAULT_GEOMETRY)
        layout = QVBoxLayout()
        layout.addWidget(QLabel(message))
        self.setLayout(layout)
        self.setPalette(create_palette(dark_mode))
        self.update_stylesheet()

    def update_stylesheet(self):
        if self.dark_mode:
            self.setStyleSheet("QLabel { color: white; } QPushButton { background-color: #353535; color: white; }")
        else:
            self.setStyleSheet("QLabel { color: black; } QPushButton { background-color: #F0F0F0; color: black; }")

    def create_button(self, text, callback):
        button = QPushButton(text)
        button.clicked.connect(callback)
        if self.dark_mode:
            button.setStyleSheet("QPushButton { background-color: #353535; color: white; }")
        else:
            button.setStyleSheet("QPushButton { background-color: #F0F0F0; color: black; }")
        return button


class OptionsDialog(ThemedDialog):
    def __init__(self, dark_mode, parent=None):
        super().__init__("Options", "Options include settings like task sorting, themes, lo-fi music, and more.",
                         dark_mode, parent)
        self.parent = parent  # Reference to the main window
        self.init_ui()

    def init_ui(self):
        layout = self.layout()
        self.toggle_button = self.create_button(f"Dark Mode: {'On' if self.dark_mode else 'Off'}",
                                                self.toggle_dark_mode)
        self.toggle_button.setFixedSize(150, 30)
        layout.addWidget(self.toggle_button)

    def toggle_dark_mode(self):
        self.dark_mode = not self.dark_mode
        self.setPalette(create_palette(self.dark_mode))
        self.toggle_button.setText(f"Dark Mode: {'On' if self.dark_mode else 'Off'}")
        self.update_stylesheet()
        if self.parent:
            self.parent.toggle_dark_mode_from_options(self.dark_mode)


class ToDoDialog(ThemedDialog):
    def __init__(self, dark_mode, parent=None):
        super().__init__("To-Do List", "", dark_mode, parent)
        self.tasks = load_tasks()
        self.init_ui()

    def init_ui(self):
        layout = self.layout()
        self.task_display = QTextEdit(self)
        self.task_display.setReadOnly(True)
        self.refresh_task_display()
        layout.addWidget(self.task_display)
        layout.addWidget(self.create_button("Add Task", self.add_task))
        layout.addWidget(self.create_button("Mark Task as Completed", self.complete_task))
        layout.addWidget(self.create_button("Delete Task", self.delete_task))

    def refresh_task_display(self):
        self.task_display.clear()
        if self.tasks:
            for i, task in enumerate(self.tasks, 1):
                status = "Completed" if task['completed'] else "Incomplete"
                self.task_display.append(f"{i}. {task['task']} (Priority: {task['priority']}) - {status}")
        else:
            self.task_display.setText("No tasks to show.")

    def add_task(self):
        while True:
            task_name, ok = QtWidgets.QInputDialog.getText(self, "New Task", "Enter task name (or type 'stop' to finish adding tasks):")
            if not ok or task_name.lower() == 'stop':
                break
            
            priority, ok = QtWidgets.QInputDialog.getItem(self, "Priority", "Set priority:", ["low", "medium", "high"], 0, False)
            if ok:
                self.tasks.append({"task": task_name, "priority": priority, "completed": False})
                save_tasks(self.tasks)
                self.refresh_task_display()

    def complete_task(self):
        if not self.tasks:
            return
        task_index, ok = QtWidgets.QInputDialog.getInt(self, "Complete Task", "Enter task number to mark as complete:",
                                                       1, 1, len(self.tasks), 1)
        if ok:
            self.tasks[task_index - 1]['completed'] = True
            save_tasks(self.tasks)
            self.refresh_task_display()

    def delete_task(self):
        if not self.tasks:
            return
        task_index, ok = QtWidgets.QInputDialog.getInt(self, "Delete Task", "Enter task number to delete:", 1, 1,
                                                       len(self.tasks), 1)
        if ok:
            del self.tasks[task_index - 1]
            save_tasks(self.tasks)
            self.refresh_task_display()


class ToDoApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.dark_mode = False
        self.initializeUI()
        self.init_main_menu_buttons()
        self.update_stylesheet_recursively(self)

    def initializeUI(self):
        self.setWindowTitle("[TDL] To-Do List™")
        self.setGeometry(100, 100, 960, 480)
        self.setWindowIcon(QIcon("todolist.jpg"))
        self.setPalette(create_palette(self.dark_mode))

    def toggle_dark_mode_from_options(self, is_dark_mode):
        self.dark_mode = is_dark_mode
        self.setPalette(create_palette(self.dark_mode))
        self.update_stylesheet_recursively(self)

    def update_stylesheet_recursively(self, widget):
        for child in widget.findChildren(QWidget):
            if isinstance(child, QPushButton):
                if self.dark_mode:
                    child.setStyleSheet("QPushButton { background-color: #353535; color: white; }")
                else:
                    child.setStyleSheet("QPushButton { background-color: #F0F0F0; color: black; }")
            elif isinstance(child, QLabel):
                if self.dark_mode:
                    child.setStyleSheet("QLabel { color: white; }")
                else:
                    child.setStyleSheet("QLabel { color: black; }")
            if child.children():
                self.update_stylesheet_recursively(child)

    def init_main_menu_buttons(self):
        central_widget = QWidget()
        button_layout = QVBoxLayout(central_widget)
        button_layout.setAlignment(Qt.AlignCenter)
        buttons = [
            ("Start To-Do List", self.open_todo),
            ("Options", self.open_options),
            ("Help", self.open_help),
            ("Credits", self.open_credits),
            ("Exit", self.close)
        ]

        for text, callback in buttons:
            button = QPushButton(text)
            button.setFixedSize(240, 80)
            button.clicked.connect(callback)
            if self.dark_mode:
                button.setStyleSheet("QPushButton { background-color: #353535; color: white; }")
            else:
                button.setStyleSheet("QPushButton { background-color: #F0F0F0; color: black; }")
            button_layout.addWidget(button)

        self.setCentralWidget(central_widget)

    def open_dialog(self, title, message):
        dialog = ThemedDialog(title, message, self.dark_mode)
        dialog.exec()

    def open_todo(self):
        self.todo_dialog = ToDoDialog(self.dark_mode)
        self.todo_dialog.exec()

    def open_options(self):
        self.options_dialog = OptionsDialog(self.dark_mode, self)
        self.options_dialog.exec()

    def open_help(self):
        self.open_dialog("Help", HELP_MESSAGE)

    def open_credits(self):
        self.open_dialog("Credits", CREDITS_MESSAGE)


def create_window():
    app = QApplication(sys.argv)
    window = ToDoApp()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    create_window()