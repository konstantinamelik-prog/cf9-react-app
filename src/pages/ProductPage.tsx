import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {createProduct, getProduct, updateProduct} from "@/api/products.ts";
import {useForm} from "react-hook-form";
import {type ProductFormData, productFormSchema} from "@/schemas/products.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {Input} from "@/components/ui/input.tsx";
import {Field, FieldLabel} from "@/components/ui/field.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";

const ProductPage = () => {
    const { productId } = useParams();
    const id = Number(productId);

    const isEdit = !!productId;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors, isSubmitting},
        reset
    } = useForm<ProductFormData>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: "",
            image: "",
            price: 0,
            sort: 0,
            is_active: false,
            is_favorite: false,
            category_id: 100
        }
    });

    useEffect(() => {
        if (isEdit) {
            if (productId) {
                getProduct(id)
                    .then((data) => {
//         setValue("name", data.name ?? "");
//         setValue("slug", data.slug ?? "");
//         setValue("description", data.description ?? "");
//         setValue("image", data.image ?? "");
//         setValue("price", data.price ?? 0);
//         setValue("sort", data.sort ?? 0);
//         setValue("is_active", data.is_active ?? false);
//         setValue("is_favorite", data.is_favorite ?? false);
                        const values = {
                            name: data.name ?? "",
                            slug: data.slug ?? "",
                            description: data.description ?? "",
                            image: data.image ?? "",
                            price: data.price ?? 0,
                            sort: data.sort ?? 0,
                            is_active: data.is_active ?? false,
                            is_favorite: data.is_favorite ?? false,
                            category_id: 100
                        }
                        reset(values);
                    })
                    .catch((err) => {
                        console.error("Error fetching product", err);
                        toast.error("Error fetching product");
                    })
            }
        }
    }, [])

    const onSubmit = async (data: ProductFormData) => {
        try {
            if (isEdit) {
                await updateProduct(id, data);
                toast.success("Product updated successfully");
            } else {
                await createProduct(data);
                toast.success("Product created successfully");
            }
            navigate("/products")
        } catch (err) {
            toast.error(isEdit ? "Error updating product" : "Error creating product");
            console.error(isEdit ? "Error updating product" : "Error creating product", err);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto p-8 border rounded-md space-y-4 bg-white"
                autoComplete="off"
            >
                <h1 className="text-xl font-bold mb-4">
                    {isEdit ? "Edit Product" : "New Product"}
                </h1>
                <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" {...register("name")}/>
                    {errors.name && (
                        <div className="text-cf-dark-red text-sm">{errors.name.message}</div>
                    )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="slug">Slug</FieldLabel>
                    <Input id="slug" {...register("slug")}/>
                    {errors.slug && (
                        <div className="text-cf-dark-red text-sm">{errors.slug.message}</div>
                    )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="description">Description</FieldLabel>
                    <Textarea id="description" {...register("description")}/>
                    {errors.description && (
                        <div className="text-cf-dark-red text-sm">{errors.description.message}</div>
                    )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="image">Image</FieldLabel>
                    <Input id="image" {...register("image")}/>
                    {errors.image && (
                        <div className="text-cf-dark-red text-sm">{errors.image.message}</div>
                    )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="price">Price</FieldLabel>
                    <Input id="price" type="number" step="0.01" {...register("price")}/>
                    {errors.price && (
                        <div className="text-cf-dark-red text-sm">{errors.price.message}</div>
                    )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="sort">Sort</FieldLabel>
                    <Input id="sort" {...register("sort")}/>
                    {errors.sort && (
                        <div className="text-cf-dark-red text-sm">{errors.sort.message}</div>
                    )}
                </Field>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="is_active"
                        checked={watch("is_active")}
                        onCheckedChange={(v) => setValue("is_active", v)}
                    />
                    <Label htmlFor="is_active">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="is_favorite"
                        checked={watch("is_favorite")}
                        onCheckedChange={(v) => setValue("is_favorite", v)}
                    />
                    <Label htmlFor="is_favorite">Favorite</Label>
                </div>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full">
                    {isSubmitting ? "Submitting..." : isEdit ? "Update" : "Create"}
                </Button>
            </form>
        </>
    )
}
export default ProductPage