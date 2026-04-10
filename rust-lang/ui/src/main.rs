use iced::widget::{button, column, text};
use iced::{Alignment, Element, Sandbox, Settings};

pub fn main() -> iced::Result {
    // 启动应用
    Counter::run(Settings::default())
}

// 1. 定义状态 (Model)
struct Counter {
    value: i32,
}

// 2. 定义消息 (Message)
#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}

// 3. 实现 Sandbox (Iced 最简单的生命周期接口)
impl Sandbox for Counter {
    type Message = Message;

    // 初始化状态
    fn new() -> Self {
        Self { value: 0 }
    }

    // 窗口标题
    fn title(&self) -> String {
        String::from("Rust Iced 计数器案例")
    }

    // 更新逻辑 (Update)
    fn update(&mut self, message: Message) {
        match message {
            Message::IncrementPressed => {
                self.value += 1;
            }
            Message::DecrementPressed => {
                self.value -= 1;
            }
        }
    }

    // 渲染界面 (View)
    fn view(&self) -> Element<Message> {
        column![
            button("decrease").on_press(Message::DecrementPressed),
            text(self.value).size(50),
            button("increase").on_press(Message::IncrementPressed),
        ]
        .padding(20)
        .align_items(Alignment::Center)
        .into()
    }
}