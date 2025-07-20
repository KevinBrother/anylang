// hello_amd64.s
#include "$GOROOT/pkg/include/textflag.h"

// 声明外部函数（Go运行时提供）
TEXT ·printString(SB), NOSPLIT, $0-16
    MOVQ s+0(FP), RCX      // 字符串指针 -> RCX
    MOVQ len+8(FP), RDX    // 字符串长度 -> RDX
    CALL runtime·printstring(SB)
    RET

// 导出的汇编函数（供Go调用）
TEXT ·hello(SB), NOSPLIT, $0-0
    // 准备字符串数据
    LEAQ helloStr(SB), RCX
    MOVQ $13, RDX          // 字符串长度 "Hello, world!\n"
    
    // 调用 printString
    CALL ·printString(SB)
    RET

// 定义字符串数据（确保此处无缺失）
DATA helloStr(SB), $byte("Hello, world!\n")
GLOBL helloStr(SB), RO, $13