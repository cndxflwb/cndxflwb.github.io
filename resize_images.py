# python resize_images.py -i magazine-images -o thumbs -w 200

import os
from PIL import Image
import argparse

def resize_images(input_dir, output_dir, target_width):
    """
    调整输入目录中所有图片的分辨率
    
    参数:
        input_dir: 输入目录路径
        output_dir: 输出目录路径
        target_width: 目标宽度(高度等比例缩放)
    """
    # 支持的图片格式
    supported_formats = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp')
    
    # 确保输出目录存在
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 遍历输入目录中的所有文件
    for filename in os.listdir(input_dir):
        # 检查文件是否为支持的图片格式
        if filename.lower().endswith(supported_formats):
            input_path = os.path.join(input_dir, filename)
            
            try:
                # 打开图片
                with Image.open(input_path) as img:
                    # 计算等比例的高度
                    width_percent = target_width / float(img.size[0])
                    target_height = int(float(img.size[1]) * float(width_percent))
                    
                    # 调整图片大小
                    resized_img = img.resize((target_width, target_height), Image.LANCZOS)
                    
                    # 构建输出路径
                    output_path = os.path.join(output_dir, filename)
                    
                    # 保存图片，保持原始格式和质量
                    if img.mode in ('RGBA', 'LA'):
                        # 保留透明度通道
                        resized_img.save(output_path, format=img.format, quality=95)
                    else:
                        # 转换为RGB以确保兼容性
                        if resized_img.mode != 'RGB':
                            resized_img = resized_img.convert('RGB')
                        resized_img.save(output_path, format=img.format, quality=95)
                    
                    print(f"已调整: {filename} -> {target_width}x{target_height}")
                    
            except Exception as e:
                print(f"处理图片 {filename} 时出错: {str(e)}")
    
    print("所有图片处理完成!")

if __name__ == "__main__":
    # 设置命令行参数
    parser = argparse.ArgumentParser(description='批量调整图片分辨率')
    parser.add_argument('-i', '--input', required=True, help='输入目录路径')
    parser.add_argument('-o', '--output', required=True, help='输出目录路径')
    parser.add_argument('-w', '--width', type=int, required=True, help='目标宽度(高度等比例缩放)')
    
    args = parser.parse_args()
    
    # 调用函数处理图片
    resize_images(args.input, args.output, args.width)